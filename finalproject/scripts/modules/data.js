export async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}

export function filterProducts(products, category) {
    if (category === 'all') return products;
    return products.filter(p => p.category === category); // array method
}