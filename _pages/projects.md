---
layout: page
title: Research
permalink: /projects/
description: >
  Computational and probabilistic methods for resilient, adaptive, and equitable
  infrastructure systems.
nav: true
nav_order: 1
horizontal: false
---

<!-- Thrust names below are still provisional (see redesign notes). Each thrust
     links to a lean, evergreen detail page; its publications auto-populate from
     the .bib by keyword tag, so nothing here needs manual updating. -->

<style>
  /* Larger, unshaded thrust figures on the Research page */
  @media (min-width: 576px) {
    .post .profile {
      width: 42%;
    }
  }
</style>

Infrastructure systems are complex, multiscale, and adaptive. Their components
aggregate nonlinearly into network-level outcomes, they operate under evolving
hazard and societal conditions, and they are embedded in communities whose
existing inequities can be amplified or mitigated by the engineering decisions
made around them. The Rincon Research Group investigates computational algorithms,
statistical tools, probabilistic frameworks, and decision-theoretic approaches for
modeling, designing, and monitoring civil infrastructure systems exposed to
natural hazards and deterioration, and, as a future direction, to climate
stressors, with a commitment to making those tools accurate, transparent, and
equitable.

Our work spans structural reliability and risk modeling, infrastructure network
analysis, machine learning applied to natural hazards and infrastructure-engineering
contexts, graph-theoretic representations of socio-infrastructure systems,
uncertainty quantification, and the relationship between modeling choices and
social outcomes.

The work is organized around three interconnected research thrusts.

{% assign thrusts = site.projects | where: "category", "Research Thrusts" | sort: "importance" %}
{% for thrust in thrusts %}
<hr>
<div class="profile float-{% cycle 'right', 'left' %}">
  {% include figure.liquid loading="eager" path=thrust.img class="img-fluid rounded" alt=thrust.title %}
</div>
<div class="clearfix">
  <h3><a href="{{ thrust.url | relative_url }}" style="color: inherit;">{{ thrust.title }}</a></h3>
  <p>{{ thrust.description }}</p>
  <p><a href="{{ thrust.url | relative_url }}">See more details and references &rarr;</a></p>
</div>
{% endfor %}

<hr>

Interested in joining the group or collaborating? Visit the [Join](/join/) page.
