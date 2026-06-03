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
        {% if profile.location and profile.location != "TODO" %}
          <span class="profile-link profile-location">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" focusable="false">
              <path d="M12 2.5A7.5 7.5 0 0 0 4.5 10c0 5.05 6.32 10.84 6.59 11.08a1.35 1.35 0 0 0 1.82 0C13.18 20.84 19.5 15.05 19.5 10A7.5 7.5 0 0 0 12 2.5Zm0 16.45C10.1 17.1 6.5 13.05 6.5 10a5.5 5.5 0 0 1 11 0c0 3.05-3.6 7.1-5.5 8.95ZM12 6.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm0 4.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z"/>
            </svg>
            <span>{{ profile.location }}</span>
          </span>
        {% endif %}
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
        {% if profile.links.openreview and profile.links.openreview != "TODO" %}
          {% include profile-link.html href=profile.links.openreview label="OpenReview" icon="openreview" %}
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
