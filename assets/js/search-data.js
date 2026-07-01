// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Computational and probabilistic methods for resilient, adaptive, and equitable infrastructure systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-journal-articles",
              title: "Journal Articles",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/journal-publications/";
              },
            },{id: "dropdown-conference-articles",
              title: "Conference Articles",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/conference-publications/";
              },
            },{id: "dropdown-datasets",
              title: "Datasets",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/dataset-publications/";
              },
            },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching philosophy and experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "People",
          description: "The Rincon Research Group at CU Boulder",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-join",
          title: "Join",
          description: "Prospective students and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-raul-rincon-gave-a-presentation-at-the-engineering-mechanics-institute-conference-and-probabilistic-mechanics-amp-amp-reliability-conference-emi-2024-in-chicago-il-he-was-awarded-the-1st-place-emi-objective-resilience-student-paper-presentation-competition",
          title: 'Raul Rincon gave a presentation at the Engineering Mechanics Institute Conference and Probabilistic...',
          description: "",
          section: "News",},{id: "news-raul-rincon-was-selected-as-a-2024-2025-future-faculty-fellow-by-the-george-r-brown-school-of-engineering-at-rice-university-see-note",
          title: 'Raul Rincon was selected as a 2024-2025 Future Faculty Fellow by the George...',
          description: "",
          section: "News",},{id: "news-raul-rincon-accepted-a-tenure-track-faculty-position-at-the-university-of-colorado-boulder-in-the-civil-environmental-and-architectural-engineering-department-he-will-join-as-assistant-professor-in-fall-2026-see-note-by-rice-university",
          title: 'Raul Rincon accepted a tenure-track faculty position at the University of Colorado Boulder...',
          description: "",
          section: "News",},{id: "news-raul-rincon-gave-a-presentation-at-the-14th-international-conference-on-structural-safety-and-reliability-icossar-25-in-los-angeles-ca-he-was-selected-as-one-of-the-iassar-best-student-paper-award-infrastructure-group",
          title: 'Raul Rincon gave a presentation at the 14th International Conference on Structural Safety...',
          description: "",
          section: "News",},{id: "news-a-collaborative-paper-published-in-the-journal-structural-engineering-international-was-awarded-the-outstanding-paper-award-category-scientific-paper-see-the-press-release",
          title: 'A collaborative paper published in the Journal Structural Engineering International was awarded the...',
          description: "",
          section: "News",},{id: "news-raul-rincon-defended-his-ph-d-thesis-smart-and-objective-modeling-of-structure-to-infrastructure-system-performance",
          title: 'Raul Rincon defended his Ph.D. thesis, “Smart and Objective Modeling of Structure-to-Infrastructure System...',
          description: "",
          section: "News",},{id: "news-raul-rincon-gave-a-presentation-on-smart-and-objective-modeling-of-structure-to-infrastructure-system-performance-for-the-joint-geosi-cimoc-research-seminar-at-universidad-de-los-andes-colombia",
          title: 'Raul Rincon gave a presentation on “Smart and Objective Modeling of Structure-to-Infrastructure System...',
          description: "",
          section: "News",},{id: "news-new-collaborative-preprint-phase-transitions-in-collective-damage-of-civil-structures-under-natural-hazards-joint-work-with-sebin-oh-jinyan-zhao-jamie-e-padgett-and-ziqi-wang-we-show-that-urban-structural-damage-exhibits-phase-transition-phenomena-analogous-to-first-and-second-order-transitions-in-statistical-physics-with-implications-for-how-engineering-modeling-practices-bias-urban-risk-metrics-available-on-arxiv",
          title: 'New collaborative preprint: “Phase Transitions in Collective Damage of Civil Structures under Natural...',
          description: "",
          section: "News",},{id: "news-raul-rincon-was-invited-to-present-at-the-2026-nheri-gsc-march-general-meeting-his-presentation-titled-examining-infrastructure-failures-in-socio-physical-systems-using-attributed-graph-models-is-available-on-the-nheri-gsc-youtube-channel",
          title: 'Raul Rincon was invited to present at the 2026 NHERI GSC March General...',
          description: "",
          section: "News",},{id: "news-raul-rincon-was-awarded-the-ralph-budd-ph-d-engineering-thesis-award-this-award-is-given-for-the-best-written-thesis-in-the-george-r-brown-school-of-engineering-and-computing-at-rice-university",
          title: 'Raul Rincon was awarded the Ralph Budd Ph.D. Engineering Thesis Award. This award...',
          description: "",
          section: "News",},{id: "news-raul-rincon-has-been-appointed-as-a-full-member-of-the-engineering-mechanics-institute-emi-objective-resilience-committee-orc",
          title: 'Raul Rincon has been appointed as a full member of the Engineering Mechanics...',
          description: "",
          section: "News",},{id: "news-raul-rincon-presented-at-the-2026-nheri-simcenter-computational-symposium-at-uc-berkeley",
          title: 'Raul Rincon presented at the 2026 NHERI SimCenter Computational Symposium at UC Berkeley....',
          description: "",
          section: "News",},{id: "news-raul-rincon-presented-ongoing-research-with-jamie-padgett-and-mauricio-sanchez-silva-at-the-engineering-mechanics-institute-conference-emi-2026-at-cu-boulder",
          title: 'Raul Rincon presented ongoing research with Jamie Padgett and Mauricio Sanchez-Silva at the...',
          description: "",
          section: "News",},{id: "projects-adaptive-and-flexible-models",
          title: 'Adaptive and flexible models',
          description: "through AI and statistical tools",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adaptive_surrogate_modeling/";
            },},{id: "projects-risk-mitigation-solutions",
          title: 'Risk mitigation solutions',
          description: "From component to regional scale interventions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/critical_facilities/";
            },},{id: "projects-hazard-analysis-and-regional-risk",
          title: 'Hazard analysis and regional risk',
          description: "Analyzing bridges and buildings portfolios",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hazard_regional/";
            },},{id: "projects-dynamic-resilience",
          title: 'Dynamic resilience',
          description: "accounting the life-cycle conditions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/life-cycle_resilience/";
            },},{id: "projects-performance-based-engineering",
          title: 'Performance-based engineering',
          description: "Component and structure-level analyses",
          section: "Projects",handler: () => {
              window.location.href = "/projects/structural_vulnerability/";
            },},{id: "projects-uncertainty-quantification-and-uncertainties-in-the-modeling-process",
          title: 'Uncertainty Quantification and Uncertainties in the Modeling Process',
          description: "Quantifying not just parameter uncertainty but the hidden uncertainty of modeling choices, and how it compounds across scales and communities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thrust_equitable_metrics/";
            },},{id: "projects-dynamic-user-physical-infrastructure-systems",
          title: 'Dynamic User-Physical Infrastructure Systems',
          description: "How users, owners, physical networks, and environmental stressors interact and evolve. These interactions and their hidden relationships shape long-term resilience and sustainability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thrust_graph_physics/";
            },},{id: "projects-multiscale-infrastructure-systems-modeling",
          title: 'Multiscale Infrastructure Systems Modeling',
          description: "We ask how to make structure-to-network scale reliability, risk, and resilience assessments computationally feasible without sacrificing the realism of the individual submodels involved in the analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thrust_multiscale_smart/";
            },},{id: "projects-equitable-resilience-modeling",
          title: 'Equitable resilience modeling',
          description: "uncovering and mitigating bias",
          section: "Projects",handler: () => {
              window.location.href = "/projects/unbiased_equit_modeling/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%75%6C.%72%69%6E%63%6F%6E@%63%6F%6C%6F%72%61%64%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rinconraul", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/raul-rincon-garcia", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8340-4718", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Raul-Rincon-3/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ObvaqGYAAAAJ&hl=en", "_blank");
        },
      },];
