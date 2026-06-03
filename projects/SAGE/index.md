---
layout: default
title: "SAGE: Spatial-visual Adaptive Graph Exploration for Efficient Visual Place Recognition"
body_class: "project-body"
permalink: /projects/SAGE/
description: "SAGE: Spatial-visual Adaptive Graph Exploration for Efficient Visual Place Recognition."
---

<main class="project-page" id="main-content">
  <header class="project-page-header">
    <nav class="project-topnav" aria-label="Project navigation">
      <a href="{{ '/' | relative_url }}">Shunpeng Chen</a>
      <span>/</span>
      <a class="project-paper-label" href="https://openreview.net/forum?id=DCpbEXqPvS" target="_blank" rel="noopener noreferrer">SAGE</a>
    </nav>
    <nav class="project-section-nav" aria-label="Page sections">
      <a href="#overview">Overview</a>
      <a href="#method">Method</a>
      <a href="#results">Results</a>
      <a href="#visualization">Visualization</a>
      <a href="#contact">Contact</a>
      <a href="#bibtex">BibTeX</a>
    </nav>
  </header>

  <section class="project-hero">
    <p class="project-kicker">ICLR 2026 Conference Paper</p>
    <h1><span class="project-title-emphasis">SAGE</span>: Spatial-visual Adaptive Graph Exploration for Efficient Visual Place Recognition</h1>
    <p class="project-subtitle">SAGE learns efficient Visual Place Recognition (VPR) through dynamic geo-visual graph exploration, hard neighborhood mining, and lightweight parameter-efficient adaptation on a frozen DINOv2 backbone.</p>

    <p class="project-authors">
      <a href="https://scholar.google.com/citations?user=azDgUMUAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Shunpeng Chen</a>,
      <a href="https://scholar.google.com/citations?hl=zh-CN&user=DnJKQI8AAAAJ" target="_blank" rel="noopener">Changwei Wang</a>,
      <a href="https://scholar.google.com/citations?user=_IUq7ooAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Rongtao Xu</a>,
      Xingtian Pei,
      <a href="https://scholar.google.com/citations?user=0BusGXMAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Yukun Song</a>,
      <br class="project-author-break">
      Jinzhou Lin,
      <a href="https://scholar.google.com/citations?user=2eo4NBsAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Wenhao Xu</a>,
      <a href="https://scholar.google.com/citations?user=rRrAfF4AAAAJ" target="_blank" rel="noopener">Jingyi Zhang</a>,
      Li Guo,
      <a href="https://scholar.google.com/citations?hl=zh-CN&user=htmrWvUAAAAJ" target="_blank" rel="noopener">Shibiao Xu</a>
    </p>

    <div class="project-actions" aria-label="Project links">
      {% include project-link.html kind="paper" label="Paper" href="https://openreview.net/forum?id=DCpbEXqPvS" %}
      {% include project-link.html kind="poster" label="ICLR Poster" href="https://iclr.cc/virtual/2026/poster/10010801" %}
      {% include project-link.html kind="code" label="Code" href="https://github.com/chenshunpeng/SAGE" %}
      {% include project-link.html kind="models" label="Models" href="https://drive.google.com/drive/folders/1-nQi9fhJPuiqHkcrGqBoIwiemnQ2L1-m?usp=sharing" %}
    </div>
  </section>

  <figure class="project-figure project-figure-hero">
    <a class="project-image-link" href="{{ '/assets/projects/sage/architecture.png' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/projects/sage/architecture.png' | relative_url }}" alt="SAGE architecture for adaptive graph exploration and visual place recognition." loading="eager">
    </a>
    <figcaption>Overview of SAGE. The framework updates the online geo-visual graph during training and combines hard neighborhood mining with Soft Probing.</figcaption>
  </figure>

  <section class="project-section" id="overview">
    <h2>Overview</h2>
    <p>
      SAGE addresses the limits of static sampling policies in VPR. During training, it continuously reconstructs an online geo-visual graph so that sample mining follows the model's evolving embedding space. A greedy weighted clique expansion sampler mines informative spatial-visual neighborhoods, while Soft Probing amplifies discriminative local patches before aggregation.
    </p>
  </section>

  <section class="project-section">
    <h2>Highlights</h2>
    <div class="project-highlight-grid">
      <article>
        <h3>Adaptive graph exploration</h3>
        <p>Training neighborhoods are refreshed online instead of being fixed before optimization.</p>
      </article>
      <article>
        <h3>Hard sample mining</h3>
        <p>A greedy weighted clique expansion sampler focuses training on challenging geo-visual neighborhoods.</p>
      </article>
      <article>
        <h3>Soft Probing</h3>
        <p>A lightweight residual weighting module boosts discriminative local patches before aggregation.</p>
      </article>
      <article>
        <h3>Parameter efficiency</h3>
        <p>The released model keeps the DINOv2 backbone frozen and trains a compact set of adaptation parameters.</p>
      </article>
    </div>
  </section>

  <section class="project-section" id="method">
    <h2>Method Overview</h2>
    <div class="project-method">
      <div>
        <h3>1. Online graph reconstruction</h3>
        <p>SAGE repeatedly rebuilds a spatial-visual graph during training to track the current descriptor geometry.</p>
      </div>
      <div>
        <h3>2. Clique expansion mining</h3>
        <p>Hard and informative neighborhoods are selected with a greedy weighted clique expansion strategy.</p>
      </div>
      <div>
        <h3>3. Efficient representation learning</h3>
        <p>SoftP and parameter-efficient fine-tuning strengthen local evidence without updating the full backbone.</p>
      </div>
    </div>
  </section>

  <section class="project-section" id="results">
    <h2>Results</h2>
    <p>
      SAGE is evaluated across VPR benchmarks with multiple descriptor dimensions and model variants. The screenshots below summarize the main comparison, extended benchmark coverage, and parameter-efficiency analysis.
    </p>
    <div class="project-figure-stack">
      <figure class="project-figure">
        <a class="project-image-link" href="{{ '/assets/projects/sage/sage-result1.png' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/projects/sage/sage-result1.png' | relative_url }}" alt="SAGE main benchmark comparison on SPED, Pitts30k-test, MSLS-val, and Nordland." loading="lazy">
        </a>
        <figcaption>Main benchmark comparison on SPED, Pitts30k-test, MSLS-val, and Nordland under different descriptor dimensions.</figcaption>
      </figure>
      <figure class="project-figure">
        <a class="project-image-link" href="{{ '/assets/projects/sage/sage-result2.png' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/projects/sage/sage-result2.png' | relative_url }}" alt="SAGE benchmark comparison on AmsterTime, Tokyo24/7, Pitts250k-test, and Eynsham." loading="lazy">
        </a>
        <figcaption>Additional benchmark comparison on AmsterTime, Tokyo24/7, Pitts250k-test, and Eynsham.</figcaption>
      </figure>
      <figure class="project-figure">
        <a class="project-image-link" href="{{ '/assets/projects/sage/sage-result3.png' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/projects/sage/sage-result3.png' | relative_url }}" alt="SAGE comparison with recent backbone and VPR methods on SPED, MSLS-val, Nordland, Tokyo24/7, and Pitts250k-test." loading="lazy">
        </a>
        <figcaption>Comparison with recent VPR methods, including VLAD-BuFF, EDTFormer, MegaLoc, ImAge, EffoVPR, FoL, and SelaVPR++.</figcaption>
      </figure>
      <div class="project-figure-grid project-figure-grid-compact">
        <figure class="project-figure">
          <a class="project-image-link" href="{{ '/assets/projects/sage/sage-result4.png' | relative_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/projects/sage/sage-result4.png' | relative_url }}" alt="SAGE-B and SAGE-L results across common VPR benchmarks." loading="lazy">
          </a>
          <figcaption>SAGE (ViT-B and ViT-L) results without InteractHead at 322 × 322. Nordland⋆ uses 2,760 summer queries against a 27,592 winter database; Nordland uses 27,592 winter queries against a 27,592 summer database.</figcaption>
        </figure>
        <figure class="project-figure">
          <a class="project-image-link" href="{{ '/assets/projects/sage/sage-parameters.png' | relative_url }}" target="_blank" rel="noopener">
            <img src="{{ '/assets/projects/sage/sage-parameters.png' | relative_url }}" alt="SAGE parameter-efficiency comparison with VPR baselines." loading="lazy">
          </a>
          <figcaption>Parameter comparison (M) for VPR methods with DINOv2-B. Parentheses indicate parameters in the optional cross-image encoder.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="project-section" id="visualization">
    <h2>Visualization</h2>
    <figure class="project-figure">
      <a class="project-image-link" href="{{ '/assets/projects/sage/sage-qualitative.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/assets/projects/sage/sage-qualitative.png' | relative_url }}" alt="SAGE qualitative retrieval and feature activation analysis." loading="lazy">
      </a>
      <figcaption>Qualitative retrieval and activation analysis. The left panel compares retrievals, while the right panel visualizes responses from SALAD, CFP, and SoftP.</figcaption>
    </figure>
  </section>

  <section class="project-section" id="contact">
    <h2>Contact</h2>
    <p class="project-contact">For questions, contact: <a href="mailto:shunpengchen@bupt.edu.cn">shunpengchen@bupt.edu.cn</a></p>
  </section>

  <section class="project-section" id="bibtex">
    <h2>BibTeX</h2>
<pre class="project-bibtex"><code>@inproceedings{SAGE,
  title={SAGE: Spatial-visual Adaptive Graph Exploration for Efficient Visual Place Recognition},
  author={Shunpeng Chen and Changwei Wang and Rongtao Xu and Xingtian Pei and Yukun Song and Jinzhou Lin and Wenhao Xu and Jingyi Zhang and Li Guo and Shibiao Xu},
  booktitle={The Fourteenth International Conference on Learning Representations},
  year={2026},
  url={https://openreview.net/forum?id=DCpbEXqPvS}
}</code></pre>
  </section>
</main>
