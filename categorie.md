---
layout: page
title: Categorie
permalink: /categorie/
description: >
  In questa pagina trovi tutti gli articoli del blog organizzati per categoria.
---

<nav class="cat-nav">
  {% assign sorted = site.categories | sort %}
  {% for category in sorted %}
    <a href="#{{ category[0] | slugify }}">
      {{ category[0] }}
    </a>
  {% endfor %}
</nav>

<hr>

{% assign sorted = site.categories | sort %}
{% for category in sorted %}
## <span id="{{ category[0] | slugify }}"></span>{{ category[0] }}

<ul class="cat-list">
  {% for post in category[1] %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
      <span class="cat-date">
        {{ post.date | date: "%d %B %Y" }}
      </span>
    </li>
  {% endfor %}
</ul>

<hr>
{% endfor %}
