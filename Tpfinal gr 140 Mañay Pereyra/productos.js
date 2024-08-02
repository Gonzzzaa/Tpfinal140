document.addEventListener('DOMContentLoaded', function () {
    const productos = [
        { nombre: 'Carne Picada de primera x 1kg.', precio: 7800.00, stock: 25, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/239828-170-170?v=637840716383000000&width=170&height=170&aspect=true' },
        { nombre: 'Fideos tallarines 1 uni.', precio: 1050.50, stock: 35, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/408418-1600-auto?v=638343782761330000&width=1600&height=auto&aspect=true' },
        { nombre: 'Yerba Playadito x 1kg.', precio: 3800.00, stock: 50, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/207097-1600-auto?v=637623985987930000&width=1600&height=auto&aspect=true' },
        { nombre: 'Queso port salut Tremblay x 1kg.', precio: 9900.00, stock: 30, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/525329-1600-auto?v=638521504869400000&width=1600&height=auto&aspect=true' },
        { nombre: 'Leche entera Ilolay x 1l.', precio: 1500.00, stock: 70, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/346324-1600-auto?v=638234831830300000&width=1600&height=auto&aspect=true' },
        { nombre: 'Aceite Girasol Natura x 1.5l.', precio: 2550.00, stock: 20, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/155414-1600-auto?v=637457062358330000&width=1600&height=auto&aspect=true' },
        { nombre: 'Arroz Gallo Oro pack Ahorro x 1kg.', precio: 2250.00, stock: 30, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/318039-1600-auto?v=638180311212270000&width=1600&height=auto&aspect=true' },
        { nombre: 'Azucar comun La Perla x 1 kg.', precio: 990.00, stock: 40, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/422649-1600-auto?v=638369721705800000&width=1600&height=auto&aspect=true' },
        { nombre: 'Agua mineral sin gas Villa del Sur.', precio: 2150.00, stock: 55, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/268942-1600-auto?v=638074041690500000&width=1600&height=auto&aspect=true' },
        { nombre: 'Coca Cola zero 2.25 l.', precio: 2325.00, stock: 45, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/395283-1600-auto?v=638326494223030000&width=1600&height=auto&aspect=true' },
        { nombre: 'Harina De Trigo 000 Caserita x 1kg.', precio: 800.00, stock: 60, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/424886-1600-auto?v=638381798767270000&width=1600&height=auto&aspect=true' },
        { nombre: 'Jabon Plusbelle x 3.', precio: 2000.00, stock: 20, imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/241768-1600-auto?v=637865792329400000&width=1600&height=auto&aspect=true' },
    ];
    
    const productosContainer = document.getElementById('productos-container');
    
    productos.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <p class="producto-nombre">${producto.nombre}</p>
            <p class="producto-precio">$${producto.precio.toFixed(2)}</p>
            <input type="number" id="cantidad-${index}" min="0" max="${producto.stock}" placeholder="Cantidad" class="producto-cantidad">
        `;
        productosContainer.appendChild(productoDiv);
    });

    window.calcularTotal = function () {
        let total = 0;
        let mensajeError = '';
        
        productos.forEach((producto, index) => {
            const cantidadInput = document.getElementById(`cantidad-${index}`);
            const cantidad = parseInt(cantidadInput.value) || 0;
            
            if (cantidad < 0 || cantidad > producto.stock) {
                mensajeError += `<p>La cantidad para ${producto.nombre} es inválida o supera el stock disponible.</p>`;
            } else {
                total += cantidad * producto.precio;
            }
        });

        const mensajeDiv = document.getElementById('mensaje');
        if (mensajeError) {
            mensajeDiv.innerHTML = mensajeError;
        } else {
            mensajeDiv.innerHTML = `<p>Total de la compra: $${total.toFixed(2)}</p>`;
        }
    };
});
