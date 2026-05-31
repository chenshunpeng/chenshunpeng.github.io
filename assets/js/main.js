(function () {
  const links = Array.from(document.querySelectorAll("[data-github-repo]"));
  if (!links.length || typeof fetch !== "function") return;

  const linksByRepo = links.reduce((groups, link) => {
    const repo = link.dataset.githubRepo;
    if (!repo || !/^[^/]+\/[^/]+$/.test(repo)) return groups;
    if (!groups.has(repo)) groups.set(repo, []);
    groups.get(repo).push(link);
    return groups;
  }, new Map());

  const renderStars = (repo, count) => {
    const repoLinks = linksByRepo.get(repo) || [];
    repoLinks.forEach((link) => {
      const target = link.querySelector("[data-github-stars]");
      if (!target) return;
      target.textContent = `★ ${count.toLocaleString()}`;
      target.hidden = false;
    });
  };

  linksByRepo.forEach((_, repo) => {
    fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!data || typeof data.stargazers_count !== "number") return;
        renderStars(repo, data.stargazers_count);
      })
      .catch(() => {});
  });
})();
