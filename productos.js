document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products-container');
    const filterTypeSelect = document.getElementById('filter-type');
    const filterPriceInput = document.getElementById('filter-price');
    const filterButton = document.getElementById('filter-button');

    async function fetchProducts() {
        try {
            const response = await fetch('./Productos.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error al cargar el JSON:', error);
        }
    }

    function filterProducts(products, type, maxPrice) {
        return products.filter(item => {
            const typeMatch = type ? item.Tipo === type : true;
            const priceMatch = maxPrice ? item.Precio <= maxPrice : true;
            return typeMatch && priceMatch;
        });
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Limpiar el contenedor
        products.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <img src="${item.Imagen}" alt="${item.Nombre}">
                <h3>${item.Nombre}</h3>
                <p>Price: $${item.Precio}</p>
            `;
            productsContainer.appendChild(itemDiv);
        });
    }

    filterButton.addEventListener('click', async () => {
        const products = await fetchProducts();
        const type = filterTypeSelect.value;
        const maxPrice = parseFloat(filterPriceInput.value) || null;
        const filteredProducts = filterProducts(products, type, maxPrice);
        displayProducts(filteredProducts);
    });

    // Cargar y mostrar todos los productos al cargar la página
    fetchProducts().then(displayProducts);
});