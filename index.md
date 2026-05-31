---
layout: default
title: Home
---

{% assign profile = site.data.profile %}
{% assign preprints_by_year = site.data.preprints | group_by: "year" | sort: "name" | reverse %}
{% assign publications_by_year = site.data.publications | group_by: "year" | sort: "name" | reverse %}
{% assign collaborations_by_year = site.data.collaborations | group_by: "year" | sort: "name" | reverse %}

<div class="page-shell">
  <aside class="sidebar" aria-label="Profile">
    <div class="sidebar-inner">
      <h1>{{ profile.name }}</h1>
      <p class="sidebar-role">{{ profile.position }}</p>
      <p class="sidebar-affiliation">
        {% assign school = profile.affiliations[0] %}
        {% assign university = profile.affiliations[1] %}
        {% if school.url and school.url != "TODO" %}
          <a href="{{ school.url }}" target="_blank" rel="noopener">{{ school.name }}</a>
        {% else %}
          <span>{{ school.name }}</span>
        {% endif %},
        {% if university.url and university.url != "TODO" %}
          <a href="{{ university.url }}" target="_blank" rel="noopener">{{ university.short_link_label | default: university.name }}</a>
        {% else %}
          <span>{{ university.short_link_label | default: university.name }}</span>
        {% endif %}
      </p>

      <div class="sidebar-links" aria-label="Profile links">
        {% if profile.email and profile.email != "TODO" %}
          {% assign email_href = "mailto:" | append: profile.email %}
          {% include profile-link.html href=email_href label="Email" icon="email" %}
        {% endif %}
        {% if profile.links.github and profile.links.github != "TODO" %}
          {% include profile-link.html href=profile.links.github label="GitHub" icon="github" %}
        {% endif %}
        {% if profile.links.google_scholar and profile.links.google_scholar != "TODO" %}
          {% include profile-link.html href=profile.links.google_scholar label="Google Scholar" icon="scholar" %}
        {% endif %}
        {% if profile.links.dblp and profile.links.dblp != "TODO" %}
          {% include profile-link.html href=profile.links.dblp label="DBLP" icon="dblp" %}
        {% endif %}
        {% if profile.links.orcid and profile.links.orcid != "TODO" %}
          {% include profile-link.html href=profile.links.orcid label="ORCID" icon="orcid" %}
        {% endif %}
      </div>

      <h2>Research Interests</h2>
      <ul class="interest-list">
        {% for interest in profile.research_interests %}
          <li>{{ interest }}</li>
        {% endfor %}
      </ul>
    </div>
  </aside>

  <main class="main-content" id="main-content">
    <section class="section" id="about">
      <h2>About Me</h2>
      <p>{{ profile.summary }}</p>
    </section>

    <section class="section" id="preprints">
      <h2>Preprints</h2>
      {% for year_group in preprints_by_year %}
        <div class="year-group">
          <h3>{{ year_group.name }}</h3>
          <div class="publication-list">
            {% for publication in year_group.items %}
              {% include publication.html publication=publication %}
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </section>

    <section class="section" id="publications">
      <h2>Publications</h2>
      {% for year_group in publications_by_year %}
        <div class="year-group">
          <h3>{{ year_group.name }}</h3>
          <div class="publication-list">
            {% for publication in year_group.items %}
              {% include publication.html publication=publication %}
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </section>

    <section class="section" id="collaborations">
      <h2>Other Publications</h2>
      {% for year_group in collaborations_by_year %}
        <div class="year-group collaboration-year-group">
          <h3>{{ year_group.name }}</h3>
          <div class="collaboration-list">
            {% for publication in year_group.items %}
              {% include collaboration.html publication=publication %}
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </section>
  </main>
</div>
