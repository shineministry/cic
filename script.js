fetch('canon.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('canon-container');
    const searchInput = document.getElementById('search');

    function displayCanons(filteredData) {
      container.innerHTML = '';
      filteredData.forEach(canon => {
        const div = document.createElement('div');
        div.className = 'canon';
        div.innerHTML = `<strong>Canon ${canon.number}</strong><p>${canon.text}</p>`;
        container.appendChild(div);
      });
    }

    displayCanons(data);

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = data.filter(c => c.text.toLowerCase().includes(query));
      displayCanons(filtered);
    });
  });
