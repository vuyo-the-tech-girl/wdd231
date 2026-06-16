export function displayProducts(products) {
    const container = document.querySelector('#product-grid');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <article class="card">
        <img src="${p.image}" alt="${p.name}" loading="lazy" width="400" height="400">
        <h3>${p.name}</h3>
        <p>R${p.price}</p>
        <p>${p.material}</p>
        <button class="btn view-btn" data-id="${p.id}">View Details</button>
        </article>
        `).join(''); 

        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => openModal(btn.dataset.id, products));
        });
    }

    function openModal(id, products) {
        const product = products.find(p => p.id == id);
        const modal = document.querySelector('#product-modal');
        document.querySelector('#modal-content').innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <p><strong>Price:</strong> R${product.price}</p>
        <p><strong>Material:</strong> ${product.material}</p>
        <p><strong>Dimensions:</strong> ${product.dimensions}</p>
        <p>${product.description}</p>
        `;
        modal.showModal();
        localStorage.setItem('lastViewedBag', id); // localStorage
    }

    export function setupNav() {
        const toggle = document.querySelector('#menu-toggle');
        const nav = document.querySelector('#nav');
        if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

        const close = document.querySelector('#close-modal');
        if (close) close.addEventListener('click', () => document.querySelector('#product-modal').close());
    }
