---
layout: page
title: Multiscale Infrastructure Systems Modeling
description: We ask how to make structure-to-network scale reliability, risk, and resilience assessments computationally feasible without sacrificing the realism of the individual submodels involved in the analysis.
img: assets/img/thrust1.png
importance: 1
category: Research Thrusts
related_publications: false
---

### The question

Regional risk assessment requires understanding how thousands of individual components and their interactions determine network and community-scale performance. Traditional approaches either simplify components to preserve regional-scale tractability or model them with high fidelity, but cannot scale to a region. Both compromises leave decision-makers without models that are simultaneously reliable at the component level and feasible at the scale planning and policy require.

### What we do

We develop and apply methods for regional-scale risk analysis that couple component behavior to portfolio and network performance without collapsing the granularity that regional decisions depend on. We use machine-learning-based surrogates to make expensive structural models computationally tractable at scale, we propose Monte Carlo acceleration methods for networked systems analyses, and we develop AI-based data collection and inference methods to accelerate model learning and information gathering where field or computational data is sparse or expensive. The result is regional reliability, risk, and resilience assessments that are both computationally feasible and grounded in realistic component-level behavior.

### Publications

<div class="publications">
{% bibliography --query @*[keywords ~= multiscale] %}
</div>
