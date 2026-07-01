---
layout: page
title: "Uncertainty Quantification and Uncertainties in the Modeling Process"
description: Quantifying not just parameter uncertainty but the hidden uncertainty of modeling choices, and how it compounds across scales and communities.
img: assets/img/thrust2.png
importance: 2
category: Research Thrusts
related_publications: false
---

### The question

Multiscale resilience analysis stitches together sub-models for hazard,
deterioration, performance, and consequences. Beyond the usual parameter
uncertainty, the choices among those sub-models (for example, selecting their
fidelity or the quantity of interest) introduce a subjectivity that is rarely
quantified. This modeling uncertainty compounds across scales, can overshadow
careful sub-model refinement, and shifts outcomes for the very populations for
whom decisions are made.

### What we do

We investigate computational methods to propagate input uncertainties across scales. Ranging from analytical to machine-learning-based
approaches, we explore ways to accelerate UQ for 
different quantities of interest.
We also quantify the uncertainty arising from the modeling process itself, not only from model inputs, by studying how modeling choices interact and compound. We are interested in understanding how the resulting outcome shifts reach distinct communities. We develop decision-theoretic frameworks that translate
this uncertainty, including the uncertainty introduced by our own modeling
choices, into concrete model-selection guidance. The goal is guidance that trades model efficiency
against the risk of prediction error, or against the social cost of decisions made
on incorrect estimates, making the science of measuring resilience more
objective, equitable, and fit-for-purpose.

### Publications

<div class="publications">
{% bibliography --query @*[keywords ~= uncertainty] %}
</div>
