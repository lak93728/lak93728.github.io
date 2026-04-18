const button = document.getElementById('load-facts');
const container = document.getElementById('facts-container');

button.addEventListener('click', () => {
  container.innerHTML = "<p>Loading...</p>";

  fetch("https://catfact.ninja/facts?limit=10")
    .then(response => response.json())
    .then(data => {
      const facts = data.data;

      container.innerHTML = facts.map(item => `
        <div class="fact-card">
          ${item.fact}
        </div>
      `).join("");
    })
    .catch(error => {
      container.innerHTML = "<p>Error loading facts.</p>";
      console.error(error);
    });
});