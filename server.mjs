import http from "node:http"
import { createReadStream, statSync } from "node:fs"
import { extname, join, normalize } from "node:path"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL(".", import.meta.url))
const port = Number(process.env.PORT || 3000)
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
}

const server = http.createServer((request, response) => {
  const requestedPath = decodeURIComponent((request.url || "/").split("?")[0])
  const relativePath = requestedPath === "/" ? "presentation.html" : requestedPath.slice(1)
  const filePath = normalize(join(root, relativePath))

  if (!filePath.startsWith(root)) {
    response.writeHead(403)
    response.end("Forbidden")
    return
  }

  try {
    const stats = statSync(filePath)
    if (!stats.isFile()) throw new Error("Not a file")
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    })
    createReadStream(filePath).pipe(response)
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Not found")
  }
})

server.listen(port, "0.0.0.0", () => {
  console.log(`ML presentation preview listening on ${port}`)
})
