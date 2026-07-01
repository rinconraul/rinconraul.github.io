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

We quantify the uncertainty that arises from the modeling process itself, not only
from model inputs. Using statistical-distance frameworks and bias-quantification
methods, we measure how modeling choices interact and compound, and we study how
the resulting outcome shifts reach distinct communities. The goal is
model-selection guidance that trades model efficiency against bias and against the
social cost of decisions made on biased estimates, making the science of measuring
resilience more objective, equitable, and fit-for-purpose.

### Publications

<div class="publications">
{% bibliography --query @*[keywords ~= uncertainty] %}
</div>
