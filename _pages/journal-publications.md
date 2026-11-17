---
layout: page
permalink: /journal-publications/
title: Journal Articles
description:
nav: false
nav_order: 2
bib_search: false
kicker: Publications
---

Check [Google Scholar](https://scholar.google.com/citations?user=ObvaqGYAAAAJ&hl=en) for
the most up-to-date list.

<div class="publications">

{% bibliography --query @article %}

</div>

{% capture accepted_pubs %}{% bibliography --query @unpublished[status=accepted] %}{% endcapture %}
{% comment %} an empty query still returns an empty list wrapper, so compare its text {% endcomment %}
{% assign accepted_stripped = accepted_pubs | strip_html | strip %}
{% if accepted_stripped != "" %}

## Journal Articles Accepted

<div class="publications">

{% bibliography --query @unpublished[status=accepted] %}

</div>

{% endif %}

## Journal Articles in Review

<div class="publications">

{% bibliography --query @unpublished[status=inreview] %}

</div>
