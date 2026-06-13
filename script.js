```javascript
fetch('header.html')
.then(response => response.text())
.then(data => {
document.getElementById('header').innerHTML = data;
});

fetch('footer.html')
.then(response => response.text())
.then(data => {
document.getElementById('footer').innerHTML = data;
});

document.addEventListener("DOMContentLoaded", function(){

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if(!searchInput || !searchResults) return;

searchInput.addEventListener("input", function(){

const query = searchInput.value.toLowerCase();

searchResults.innerHTML = "";

if(query.length === 0) return;

const results = searchData.filter(item =>
item.title.toLowerCase().includes(query) ||
item.keywords.toLowerCase().includes(query)
);

results.forEach(item => {

const link = document.createElement("a");

link.href = item.url;

link.textContent = item.title;

link.style.display = "block";
link.style.padding = "8px";
link.style.background = "white";
link.style.margin = "5px 0";
link.style.textDecoration = "none";
link.style.borderRadius = "6px";

searchResults.appendChild(link);

});

});

});
```
