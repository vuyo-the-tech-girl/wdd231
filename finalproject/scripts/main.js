import { loadProducts, filterProducts } from './modules/data.js';
import { displayProducts, setupNav } from './modules/ui.js';

setupNav();

const grid = document.querySelector('#product-grid');
if (grid) {
    let allProducts = await loadProducts();
    displayProducts(allProducts.slice(0, 15)); // 15+ items

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.category;
            displayProducts(filterProducts(allProducts, cat));
        });
    });
}
