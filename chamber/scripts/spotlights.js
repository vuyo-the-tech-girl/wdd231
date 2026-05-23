async function displaySpotlights() {
    const res = await fetch('data/members.json');
    const members = await res.json();

    const qualified = members.filter(m => m.level === 'gold' || m.level === 'silver');

    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    document.querySelector('#spotlight-cards').innerHTML = selected.map(m => `
        <div class="spotlight-card">
        <h3>${m.name}</h3>
        <img src="images/${m.logo}" alt="${m.name} logo">
        <p>${m.phone}</p>
        <p>${m.address}</p>
        <a href="https://${m.website}">${m.website}</a>
        <p>Membership: ${m.level}</p>
        </div>
        `).join('');
    }
    displaySpotlights();