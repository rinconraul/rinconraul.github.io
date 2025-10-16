---
layout: page
title: Adaptive and flexible models
description: through AI and statistical tools
img: assets/img/project1/Picture1.jpg
importance: 2
category: Smart and Equitable Infrastructure Resilience
related_publications: false
---
I study AI-based techniques to reduce the computational costs of some of the required models for resilience assessment. Specific to fragility derivation techniques, I have proposed combining surrogate modeling techniques (e.g., kernel ridge and Gaussian Process regression) and active learning approaches to improve system performance characterization and computational efficiency (Fig. 1). 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/Active_Frag.jpg" title="Active learning application" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1. Component-level cumulative distribution function and system-scale fragility function.
</div>

Expanding active learning to other situations is not trivial, especially in real data collection or regional scale systems. For such cases, we propose to include the cost of data collection as well as the cost of model errors within the training procedure. We have studied the use of value of information, from a risk perspective, to guide the surrogate model training. By considering the cost —or risk— of model predictions, we seek to improve model learning with a focus on regional scale assessments (Fig.  2).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/active_learn_voi.jpg" title="Active learning with Value of Information" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2. Value of Information used in regional-scale surrogate modeling.
</div>

Beyond achieving affordable response prediction, the resulting models enable predictive fragility modeling of portfolios of hundreds of structures across a region with target accuracy levels. To make objective comparisons and support the needs of such flexible models, I have proposed to evaluate the real impacts of different modeling approaches through more systematic testing of these across risk and resilience estimates at different scales (Fig. 3). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/Model_comparison.jpg" title="Active learning with Value of Information" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. Comparison of fragility modeling techniques through different metrics.
</div>

#### Related references ####

* Rincon R, Padgett JE. (2024) “Fragility Modeling Practices and their Implications on Risk and Resilience Analysis: from the Structure to the Network Scale” _Earthquake Spectra_, 40(1), 647–673. DOI:10.1177/87552930231219220.

* Padgett JE, Rincon R, Panakkal P. (2024). “Future Cities Demand Smart and Equitable Infrastructure Resilience Modeling Perspectives.” _Npj Natural Hazards_, In Review, April 2024

* Rincon R, Padgett JE. (2024). “Intelligent learning paradigms to enable adaptable seismic fragility and restoration models.” _18th World Conference on Earthquake Engineering (WCEE 2024)_, Milan, Italy, June 30-July 5, 2024. (to be presented in July 2024).

* Rincon R, Padgett JE. (2022) “Seismic reliability analysis of complex structural systems using system-level surrogate models.” _Proceedings of the 12th National Conference in Earthquake Engineering, Earthquake Engineering Research Institute_, Salt Lake City, UT, June 27-July 1, 2022.



