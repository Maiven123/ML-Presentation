 ML-Presentation
 Overview

Imagine a model that is 99% accurate and still misses every single patient who is sick. This presentation explains why that happens and how to see through it.

It walks an audience from the confusion matrix to Precision, Recall and F1, lets them experiment with a live simulator, and ends with a Kahoot quiz to test what they learned. No installation, no build tools, no framework: a single HTML file that runs in any modern browser.

Presenting soon? The final slide carries a QR code that joins a live Kahoot quiz. The PIN belongs to a running session, so start the quiz before you present.

<br/>
The Seven Slides
	Slide	What it delivers
01	Why Accuracy Lies	The "99% trap": a model that never predicts the rare class still scores high accuracy.
02	The Confusion Matrix	The four outcomes (TP, FP, FN, TN) and what each one means in the real world.
03	Core Classification Metrics	Switch between Accuracy, Precision, Recall and F1, each with its formula, guiding question and best use case.
04	Interactive Simulator	Edit the matrix counts and watch every metric react instantly.
05	Three Students & The Exam	An analogy tying metric behaviour to bias, variance and generalization.
06	The Production Decision Matrix	How to choose the right metric for a real system.
07	Key Takeaways & Discussion	A closing summary, discussion prompts and the quiz QR code.
<br/>
 The Math

Accuracy   =  (TP + TN) / (TP + TN + FP + FN)


Precision  =  TP / (TP + FP)


Recall     =  TP / (TP + FN)


F1-Score   =  (2 × Precision × Recall) / (Precision + Recall)


Metric	The question it answers	Reach for it when
Accuracy	Of all predictions, how many were correct?	Classes are balanced and every error costs about the same.
Precision	When the model says "positive", how often is it right?	False alarms are expensive (spam filters, automated trading).
Recall	Of all real positives, how many did we catch?	Missing a case is dangerous (disease screening, fraud).
F1-Score	Is the model good at both of the above?	Classes are imbalanced and you need one balanced number.
<details> <summary><b>Quick rule of thumb for choosing a metric</b></summary> <br/>
No
Yes
Missing a real case
Raising a false alarm
Both matter
Is your dataset imbalanced?
Accuracy is a fair startingpoint
Which error hurts more?
Optimize Recall
Optimize Precision
Use F1-Score or PR-AUC
</details> <br/>
 Interactive Simulator

Slide 04 lets the audience change TP, FP, FN and TN and see Accuracy, Precision, Recall and F1 update in real time, along with a plain-language verdict on what the numbers mean.

Preset	What it demonstrates
 Rare Disease	TP=0, FP=0, FN=10, TN=990. Accuracy shows 99% while Recall and F1 collapse to 0%.
 Spam Filter	Very high precision with lower recall: a few missed spam messages are acceptable if real mail is never blocked.
 Balanced Dataset (50/50)	Precision and Recall both strong, so the metrics agree.

When a scenario makes no positive predictions at all, Precision is displayed as N/A, because it is undefined rather than zero.

<br/>
 Quick Start

Run it locally

bash
git clone https://github.com/Maiven123/ML-Presentation.git
cd ML-Presentation

Then open interactive_ml_presentation.html in Chrome, Edge, Firefox or Safari.

Publish it with GitHub Pages (optional)

Rename the file to index.html.
Go to Settings → Pages, choose the main branch and the root folder, then save.
Your deck goes live at https://maiven123.github.io/ML-Presentation/.

<br/> <div align="center">

Crafted by Maiven Shenod


</div>
