---
layout: default
title: "Focus on Local: Finding Reliable Discriminative Regions for Visual Place Recognition"
body_class: "project-body"
permalink: /projects/FoL/
description: "Focus on Local: Finding Reliable Discriminative Regions for Visual Place Recognition."
---

<main class="project-page" id="main-content">
  <header class="project-page-header">
    <nav class="project-topnav" aria-label="Project navigation">
      <a href="{{ '/' | relative_url }}">Shunpeng Chen</a>
      <span>/</span>
      <a class="project-paper-label" href="https://arxiv.org/abs/2504.09881" target="_blank" rel="noopener noreferrer">FoL</a>
    </nav>
    <nav class="project-section-nav" aria-label="Page sections">
      <a href="#overview">Overview</a>
      <a href="#method">Method</a>
      <a href="#results">Results</a>
      <a href="#visualization">Visualization</a>
      <a href="#extended-work">Extended Work</a>
      <a href="#contact">Contact</a>
      <a href="#bibtex">BibTeX</a>
    </nav>
  </header>

  <section class="project-hero">
    <p class="project-kicker">AAAI 2025 Conference Paper</p>
    <h1><span class="project-title-emphasis">Focus on Local</span>: Finding Reliable Discriminative Regions for Visual Place Recognition</h1>
    <p class="project-subtitle">FoL is a two-stage Visual Place Recognition (VPR) approach that improves image retrieval and re-ranking by focusing on reliable, discriminative local regions.</p>

    <p class="project-authors">
      <a href="https://scholar.google.com/citations?hl=zh-CN&user=DnJKQI8AAAAJ" target="_blank" rel="noopener">Changwei Wang</a>,
      <a href="https://scholar.google.com/citations?user=azDgUMUAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Shunpeng Chen</a>,
      <a href="https://scholar.google.com/citations?user=0BusGXMAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Yukun Song</a>,
      <a href="https://scholar.google.com/citations?user=_IUq7ooAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Rongtao Xu</a>,
      Zherui Zhang,
      <br class="project-author-break">
      Jiguang Zhang,
      Haoran Yang,
      Yu Zhang,
      <a href="https://scholar.google.com/citations?user=wRs-_DwAAAAJ&hl=en" target="_blank" rel="noopener">Kexue Fu</a>,
      <a href="https://scholar.google.com.hk/citations?user=H9ru_e0AAAAJ&hl=zh-CN" target="_blank" rel="noopener">Shide Du</a>,
      <a href="https://scholar.google.co.uk/citations?user=kZoG7ssAAAAJ&hl" target="_blank" rel="noopener">Zhiwei Xu</a>,
      <a href="https://scholar.google.com/citations?user=dYG_FfMAAAAJ&hl=zh-CN" target="_blank" rel="noopener">Longxiang Gao</a>,
      Li Guo,
      <a href="https://scholar.google.com/citations?hl=zh-CN&user=htmrWvUAAAAJ" target="_blank" rel="noopener">Shibiao Xu</a>
    </p>

    <div class="project-actions" aria-label="Project links">
      {% include project-link.html kind="paper" label="Paper" href="https://arxiv.org/abs/2504.09881" %}
      {% include project-link.html kind="conference" label="AAAI Page" href="https://ojs.aaai.org/index.php/AAAI/article/view/32811" %}
      {% include project-link.html kind="code" label="Code" href="https://github.com/chenshunpeng/FoL" %}
      {% include project-link.html kind="models" label="Models" href="https://huggingface.co/shunpeng/FoL" %}
      {% include project-link.html kind="demo" label="Colab Demo" href="https://colab.research.google.com/drive/1CxchBdFYxzwtCf5UOUgjMt8FxKMo2A-5?usp=sharing" %}
    </div>
  </section>

  <figure class="project-figure project-figure-hero">
    <a class="project-image-link" href="{{ '/assets/projects/fol/pipeline.jpg' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/projects/fol/pipeline.jpg' | relative_url }}" alt="FoL method pipeline showing retrieval, discriminative local region discovery, and re-ranking." loading="eager">
    </a>
    <figcaption>Overview of FoL. The method discovers reliable discriminative local regions and uses them for global retrieval and local re-ranking.</figcaption>
  </figure>

  <section class="project-section" id="overview">
    <h2>Overview</h2>
    <p>
      FoL studies how to identify reliable discriminative regions for VPR, where not every local patch is equally useful under viewpoint, illumination, and seasonal changes. Instead of relying only on whole-image similarity, FoL first retrieves candidate places globally and then selects stable, informative local regions to support fine-grained re-ranking, making the final match decision more robust in visually ambiguous scenes.
    </p>
  </section>

  <section class="project-section">
    <h2>Highlights</h2>
    <div class="project-highlight-grid">
      <article>
        <h3>Reliable local evidence</h3>
        <p>FoL focuses matching on discriminative regions instead of treating every patch as equally useful.</p>
      </article>
      <article>
        <h3>Two-stage VPR pipeline</h3>
        <p>Global retrieval supplies efficient candidates, while local re-ranking improves precision for hard cases.</p>
      </article>
      <article>
        <h3>Strong benchmark coverage</h3>
        <p>Experiments report Recall@K on common VPR datasets including Pitts, MSLS, Tokyo24/7, Nordland, SF-XL, SVOX, and Eynsham.</p>
      </article>
      <article>
        <h3>Open implementation</h3>
        <p>The repository includes training, evaluation, pretrained weights, Torch Hub loading, and visualization scripts.</p>
      </article>
    </div>
  </section>

  <section class="project-section" id="method">
    <h2>Method Overview</h2>
    <div class="project-method">
      <div>
        <h3>1. Global retrieval</h3>
        <p>FoL uses a DINOv2-based visual backbone and aggregation module to produce compact image descriptors for first-stage retrieval.</p>
      </div>
      <div>
        <h3>2. Discriminative region guidance</h3>
        <p>The model searches for stable, informative local regions that are more likely to support true place correspondence.</p>
      </div>
      <div>
        <h3>3. Local re-ranking</h3>
        <p>Candidate matches are refined with region-aware local evidence, improving robustness in visually ambiguous or condition-shifted scenes.</p>
      </div>
    </div>
  </section>

  <section class="project-section" id="results">
    <h2>Results</h2>
    <p>
      FoL is evaluated against representative VPR methods on standard benchmarks. The results emphasize the benefit of local re-ranking, especially on challenging condition-shifted datasets.
    </p>
    <div class="project-figure-stack">
      <figure class="project-figure">
        <a class="project-image-link" href="{{ '/assets/projects/fol/fol-result1.jpg' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/projects/fol/fol-result1.jpg' | relative_url }}" alt="FoL benchmark comparison on Pitts250k-test, MSLS-val, MSLS-challenge, and Tokyo24/7." loading="lazy">
        </a>
        <figcaption>Recall@K comparison on Pitts250k-test, MSLS-val, MSLS-challenge, and Tokyo24/7. FoL reports both global retrieval and re-ranking results.</figcaption>
      </figure>
      <figure class="project-figure">
        <a class="project-image-link" href="{{ '/assets/projects/fol/fol-result2.jpg' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/projects/fol/fol-result2.jpg' | relative_url }}" alt="FoL benchmark comparison on Nordland, AmsterTime, SF-XL, SVOX, and SPED." loading="lazy">
        </a>
        <figcaption>Additional Recall@1 comparison on Nordland, AmsterTime, SF-XL, SVOX, and SPED, covering large appearance, weather, and viewpoint changes.</figcaption>
      </figure>
    </div>
  </section>

  <section class="project-section" id="visualization">
    <div class="project-section-heading">
      <h2>Visualization</h2>
      {% include project-link.html kind="demo" label="Colab Demo" href="https://colab.research.google.com/drive/1CxchBdFYxzwtCf5UOUgjMt8FxKMo2A-5?usp=sharing" %}
    </div>
    <div class="project-image-pair">
      <figure>
        <a class="project-image-link" href="{{ '/assets/projects/fol/fol-visualize.jpg' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/projects/fol/fol-visualize.jpg' | relative_url }}" alt="Raw local matching visualization from FoL." loading="lazy">
        </a>
        <figcaption>Raw matching results (FoL + similarity filtering).</figcaption>
      </figure>
      <figure>
        <a class="project-image-link" href="{{ '/assets/projects/fol/fol-visualize-ransac.jpg' | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ '/assets/projects/fol/fol-visualize-ransac.jpg' | relative_url }}" alt="FoL matching visualization after RANSAC verification." loading="lazy">
        </a>
        <figcaption>Geometry-consistent matches after RANSAC (outliers removed).</figcaption>
      </figure>
    </div>
  </section>

  <section class="project-section" id="extended-work">
    <h2>Extended Work</h2>
    <div class="project-extension">
      <h3>Region Matters: Efficient and Reliable Region-Aware Visual Place Recognition</h3>
      <p>FoL was further extended in our subsequent work Region Matters, which explores more efficient and reliable region-aware representations for VPR.</p>
      <div class="project-extension-links" aria-label="Region Matters links">
        {% include project-link.html kind="paper" label="Paper" href="https://arxiv.org/abs/2604.22390" %}
        {% include project-link.html kind="code" label="Code" href="https://github.com/chenshunpeng/FoL" %}
      </div>
    </div>
  </section>

  <section class="project-section" id="contact">
    <h2>Contact</h2>
    <p class="project-contact">For questions, contact: <a href="mailto:shunpengchen@bupt.edu.cn">shunpengchen@bupt.edu.cn</a></p>
  </section>

  <section class="project-section" id="bibtex">
    <h2>BibTeX</h2>
<pre class="project-bibtex"><code>@inproceedings{FoL,
  title={Focus on Local: Finding Reliable Discriminative Regions for Visual Place Recognition},
  author={Wang, Changwei and Chen, Shunpeng and Song, Yukun and Xu, Rongtao and Zhang, Zherui and Zhang, Jiguang and Yang, Haoran and Zhang, Yu and Fu, Kexue and Du, Shide and others},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={7},
  pages={7536--7544},
  year={2025}
}</code></pre>
  </section>
</main>
