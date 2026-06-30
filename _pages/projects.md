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

<!-- PLACEHOLDER FRAMING — the three thrusts below are provisional starting points
     and will be refined in Phase 2 (see notes from the redesign session). -->

Infrastructure systems are complex, multiscale, and adaptive. Their components
aggregate nonlinearly into network-level outcomes, they operate under evolving
hazard and societal conditions, and they are embedded in communities whose
existing inequities can be amplified or mitigated by the engineering decisions
made around them. The Rincon Research Group develops the methods and models
needed to assess, design, and monitor the resilience of civil infrastructure
systems in ways that are accurate, computationally efficient, and equitable.

The work is organized around three interconnected research thrusts. **Click any
thrust to read what we are doing and the publications behind it.**

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign thrusts = site.projects | where: "category", "Research Thrusts" | sort: "importance" %}
    {% for project in thrusts %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

---

### Future directions and funding

The near-term agenda pursues three goals: (1) prospective infrastructure analyses
leveraging digital-twin concepts, continual model learning, and autonomous data
collection; (2) methods for uncovering and mitigating bias in the modeling
pipeline, connecting model-fidelity choices to their social costs; and (3)
agent-based and network-science approaches for understanding hidden relationships
across infrastructure lifecycles. Target funding includes NSF's Civil
Infrastructure Systems, Mathematical Foundations of Digital Twins, and Engineering
Design and Systems Engineering programs, as well as the U.S. Departments of
Transportation and Energy.

→ Interested in joining the group or collaborating? Visit the [Join](/join/) page.
