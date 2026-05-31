# Shunpeng Chen Academic Homepage

This repository contains a lightweight Jekyll academic homepage for GitHub Pages.
The site is designed for long-term maintenance through data files rather than
manual HTML edits.

## Local Preview

Install Ruby dependencies:

```bash
rm -f Gemfile.lock
bundle install
```

Run the local server:

```bash
bundle exec jekyll serve
```

Open:

```text
http://127.0.0.1:4000
```

To build without serving:

```bash
bundle exec jekyll build
```

If you are switching from an old local bundle that used Jekyll 3.9.0 and Liquid
4.0.3, refresh the lockfile and cached gems first:

```bash
rm -rf .bundle vendor/bundle Gemfile.lock
bundle install
bundle exec jekyll build
```

## GitHub Pages Deployment

1. Push this project to `https://github.com/chenshunpeng/chenshunpeng.github.io`.
2. In the repository settings, enable GitHub Pages from the default branch root if it is not already enabled.
3. GitHub Pages will build the site automatically using the `github-pages` gem.
4. The public site should be available at `https://chenshunpeng.github.io`.

## Updating Profile Information

Edit `_data/profile.yml` for:

- position
- affiliation / affiliations
- email
- Google Scholar
- GitHub
- DBLP
- ORCID
- research interests

Keep uncertain fields as `TODO` until verified.

## Updating Publications

Edit `_data/publications.yml`.

Each publication supports:

- `title`
- `authors_html`
- `venue`
- `year`
- `ccf`
- `status`
- `selected`
- `paper`
- `github`
- `project`

Use `<strong>Shunpeng Chen</strong>` in `authors_html` to bold the name.
Set `selected: true` only for papers that should appear in the selected
publications section. Use `TODO` for uncertain or unverified links and metadata.
Repository links belong in `github`; keep `project` for future standalone
project pages only.

Publication policy for this homepage: include papers where Shunpeng Chen is
first author, co-first author, or second author.

## Updating Preprints

Edit `_data/preprints.yml` for manuscripts that should be shown separately
from formally published papers. Use the same fields as `_data/publications.yml`.

## Updating Selected Collaborations

Edit `_data/collaborations.yml` for concise listings of other collaborative
papers where Shunpeng Chen is not a leading author. Use verified author lists
and venues; keep unknown links as `TODO`. Optional `github` and `ccf` fields
render inline with the venue.

## Publication Sources Used

- Google Scholar profile supplied by the site owner: <https://scholar.google.com/citations?user=azDgUMUAAAAJ&hl=zh-CN>
- GitHub profile: <https://github.com/chenshunpeng>
- DBLP profile: <https://dblp.org/pid/367/5431.html>
- ORCID profile: <https://orcid.org/0009-0004-1675-957X>
- SAGE OpenReview page: <https://openreview.net/forum?id=DCpbEXqPvS>
- SAGE repository: <https://github.com/chenshunpeng/SAGE>
- Region Matters arXiv page: <https://arxiv.org/abs/2604.22390>
- FoL AAAI page: <https://ojs.aaai.org/index.php/AAAI/article/view/32811>
- FoL repository: <https://github.com/chenshunpeng/FoL>
- Multimodal fusion arXiv page: <https://arxiv.org/abs/2504.02477>
- MF-RV repository: <https://github.com/Xiaofeng-Han-Res/MF-RV>
- Local feature matching dblp page: <https://dblp.dagstuhl.de/rec/journals/inffus/XuCXWLG24.html>
- Visual Para-Thinker arXiv page: <https://arxiv.org/abs/2602.13310>
- DialogueVPR listing: <https://www.pengyangwang.com/publications>
