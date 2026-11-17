---
layout: page
permalink: /dataset-publications/
title: Datasets, algorithms, and others
description: 
nav: false
nav_order: 2
bib_search: false
kicker: Publications
---

<!-- Entries come from _bibliography/papers.bib (the hand-written list this page used before is in git history). -->

## Datasets

<div class="publications">

{% bibliography --query @misc[category=dataset] %}

</div>

## Algorithms

<div class="publications">

{% bibliography --query @misc[category=algorithm] %}

</div>
