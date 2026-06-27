const componentBase = new URL(".", document.currentScript.src);

function resolveComponentPaths(container) {
  container.querySelectorAll("[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (href && !/^(https?:|mailto:|tel:|#)/i.test(href)) {
      link.href = new URL(href.replace(/^\//, ""), componentBase).href;
    }
  });

  container.querySelectorAll("[src]").forEach(asset => {
    const src = asset.getAttribute("src");

    if (src && !/^(https?:|data:|#)/i.test(src)) {
      asset.src = new URL(src.replace(/^\//, ""), componentBase).href;
    }
  });
}

function reserveHeaderSpace() {
  const headerContainer = document.getElementById("header");
  const header = headerContainer ? headerContainer.querySelector("header") : null;

  if (headerContainer && header) {
    headerContainer.style.height = `${header.offsetHeight}px`;
  }
}

function loadComponent(id, fileName, afterLoad) {
  const container = document.getElementById(id);

  if (!container) return;

  fetch(new URL(fileName, componentBase))
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
      resolveComponentPaths(container);
      if (afterLoad) afterLoad();
    });
}

loadComponent("header", "header.html", reserveHeaderSpace);
loadComponent("footer", "footer.html");

window.addEventListener("resize", reserveHeaderSpace);
