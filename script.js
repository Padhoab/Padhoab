const headerContainer = document.getElementById("header");

if (headerContainer) {
  fetch("../header.html")
    .then(response => {
      if (!response.ok) return fetch("header.html");
      return response;
    })
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;
    });
}

const footerContainer = document.getElementById("footer");

if (footerContainer) {
  fetch("../footer.html")
    .then(response => {
      if (!response.ok) return fetch("footer.html");
      return response;
    })
    .then(response => response.text())
    .then(data => {
      footerContainer.innerHTML = data;
    });
}
