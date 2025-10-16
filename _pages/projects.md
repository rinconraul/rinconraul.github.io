---
layout: page
title: Research
permalink: /projects/
description: These are the projects I work on or have worked on during my academic and professional career.
nav: true
nav_order: 3
display_categories: [Smart and Equitable Infrastructure Resilience, Structural Performance and Risk Assessment]
horizontal: false
---

I am developing resilience modeling approaches in multi-scale infrastructure systems that consider smart strategies to analyze low-probability events, compute metrics in multi-scale and heterogeneous systems, and cope with ever-changing conditions (such as aging, deterioration, or technology shifts). I am interested in improving the science of measuring, comparing, and improving infrastructure systems resilience to attain accurate, unbiased, and equitable estimates.

My research interests consist of the following three main themes: 1) to enable continuous learning within the infrastructure resilience modeling approaches, 2) to equip models with autonomous capabilities for efficient data collection and simulation, and 3) to establish a common ground for investigating the inequities in the resilience assessment procedures.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
