const headerContainer = document.getElementById("header");

if (headerContainer) {

const headerPath = window.location.pathname.includes("/articles/")
? "../header.html"
: "header.html";

fetch(headerPath)
.then(response => response.text())
.then(data => {
headerContainer.innerHTML = data;
});

}

const footerContainer = document.getElementById("footer");

if (footerContainer) {

const footerPath = window.location.pathname.includes("/articles/")
? "../footer.html"
: "footer.html";

fetch(footerPath)
.then(response => response.text())
.then(data => {
footerContainer.innerHTML = data;
});

}
