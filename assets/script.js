const firstBtn = document.getElementById("primary");
const secondBtn = document.getElementById("secondary");
const authCode = "Rn0XO9k6GWWMXI6BandjyAEnWxssdtrJUWdErvIJnQaJWMCxBDJwEzkH";
const url = "https://api.pexels.com/v1/search?query=london";

const request = fetch(url, {
  headers: {
    Authorization: authCode,
  },
})
  .then(response => response.json())
  .then(img => {
    const photos = img.photos;
    photos.forEach(photo) => {
      
    }
  });

firstBtn.addEventListener("click", event => {});

const row = document.getElementById("row");
row.innerText = "";

const col = document.createElement("div");
col.className = "col";
col.innerHTML = `
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
  </div>
</div>
`;

row.appendChild(col);
