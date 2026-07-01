---
layout: page
title: Multiscale Infrastructure Systems Modeling
description: From component behavior to network performance, this research thrust leverages and develops machine-learning-based surrogates, network science tools, and UQ frameworks to accelerate from structural reliability to system lifecycle assessment.
img: assets/img/thrust1.png
importance: 1
category: Research Thrusts
related_publications: false
---

### The question

Infrastructure performance emerges across scales: how a component behaves shapes
how a network performs, yet the two are usually modeled in separate silos, or
integrated together using high-fidelity models that make the analysis too
expensive to run at scale.

### What we do

We develop algorithmic methods that simulate heterogeneous infrastructure from the
structure to the network scale. For example, we use machine-learning-based
surrogate models to make expensive structural models tractable and couple them to
network-level performance. To reduce the computational burden of integrated
models, we investigate computational methods that trade off efficiency and
accuracy by identifying which interactions most influence system outcomes, and we
propose objective methods for such assessments. We also study smart-modeling
techniques that enable ML/AI-based models to autonomously improve their predictive
capabilities, accelerating model training in risk and resilience contexts.

### Publications

<div class="publications">
{% bibliography --query @*[keywords ~= multiscale] %}
</div>
