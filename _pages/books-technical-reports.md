---
layout: page
permalink: /books-technical-reports/
title: Book Chapters, Book Sections, and Technical Reports
description: 
nav: false
nav_order: 2
bib_search: false
kicker: Publications
---

<!-- Entries come from _bibliography/papers.bib (the hand-written list this page used before is in git history). -->

## Book chapters and book sections

<div class="publications">

{% bibliography --query @incollection %}

</div>

## Technical reports

<div class="publications">

{% bibliography --query @techreport %}

</div>
