const button = document.getElementById('load-facts');
const container = document.getElementById('facts-container');

button.addEventListener('click', () => {
  container.innerHTML = "<p>Loading...</p>";

  let cards = "";

  for (let i = 0; i < 10; i++) {
    const url = `https://cataas.com/cat?random=${Math.random()}`;
    cards += `
      <div class="fact-card">
        <img src="${url}" alt="Random Cat" style="width:100%; border-radius:8px;">
      </div>
    `;
  }

  container.innerHTML = cards;
});
