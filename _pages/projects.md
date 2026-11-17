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
wide: true
---

<!-- Thrust names are still provisional (see redesign notes). Each thrust block pulls
     its title, description, and figure from _projects/thrust_*.md, the "The question"
     paragraph from that page's body, and its latest papers from _bibliography/papers.bib
     (by keyword tag), so nothing here needs manual updating. -->

<div class="asps-r-intro">
<p class="lead">Infrastructure systems are complex, multiscale, and adaptive. Their components aggregate nonlinearly into network-level outcomes, they operate under evolving hazard and societal conditions, and they are embedded in communities whose existing inequities can be amplified or mitigated by the engineering decisions made around them.</p>
<div>
<p>The Adaptive Socio-Physical Infrastructure Lab investigates computational algorithms, statistical tools, probabilistic frameworks, and decision-theoretic approaches for modeling, designing, and monitoring civil infrastructure systems exposed to natural hazards and deterioration, and, as a future direction, to climate stressors, with a commitment to making those tools accurate, transparent, and equitable.</p>
<p>Our work spans structural reliability and risk modeling, infrastructure network analysis, machine learning applied to natural hazards and infrastructure-engineering contexts, graph-theoretic representations of socio-infrastructure systems, uncertainty quantification, and the relationship between modeling choices and social outcomes.</p>
</div>
</div>

<div class="asps-kick asps-r-label">The work is organized around three interconnected research thrusts</div>

{% assign thrusts = site.projects | where: "category", "Research Thrusts" | sort: "importance" %}
{% for thrust in thrusts %}
{% assign question = nil %}
{% assign q_parts = thrust.content | split: 'The question' %}
{% if q_parts.size > 1 %}
{% assign question = q_parts[1] | split: '<h3' | first | split: '###' | first | strip_html | strip %}
{% endif %}
<section class="asps-feature{% cycle '', ' flip' %}">
<a class="fig" href="{{ thrust.url | relative_url }}"><img src="{{ thrust.img | relative_url }}" alt="{{ thrust.title }}" loading="lazy"></a>
<div class="txt">
<div class="no">Thrust {{ forloop.index }}</div>
<h2 class="asps-disp"><a href="{{ thrust.url | relative_url }}">{{ thrust.title }}</a></h2>
<p class="desc">{{ thrust.description }}</p>
{% if question and question != '' %}
<div class="asps-kick">The question</div>
<p class="q">{{ question }}</p>
{% endif %}
<div class="asps-kick">Recent publications</div>
<div class="publications asps-mini">
{% case thrust.bib_tag %}
{% when 'multiscale' %}{% bibliography --query @*[keywords ~= multiscale] --max 3 %}
{% when 'uncertainty' %}{% bibliography --query @*[keywords ~= uncertainty] --max 3 %}
{% when 'dynamic' %}{% bibliography --query @*[keywords ~= dynamic] --max 3 %}
{% endcase %}
</div>
<a class="asps-more" href="{{ thrust.url | relative_url }}">Details and all references</a>
</div>
</section>
{% endfor %}

<p class="asps-r-cta">Interested in joining the lab or collaborating? Visit the <a href="{{ '/join/' | relative_url }}">Join</a> page.</p>
