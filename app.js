const botonesAgregar = document.querySelectorAll('.btn-agregar');
let cantidadItems = 0;
let totalVenta = 0;

botonesAgregar.forEach(botonAgrerar => {
    botonAgrerar.addEventListener('click', function() {
        const nombreProducto = botonAgrerar.dataset.nombre;
        const precioProducto = botonAgrerar.dataset.precio;
        agregarAlCarrito(nombreProducto,precioProducto);
    });
});

function agregarAlCarrito(nombre,precio) {
    totalVenta = totalVenta + parseInt(precio);
    const listaCarrito = document.getElementById('lista-carrito');
    let lista = document.createElement('li');
    lista.className = 'list-group-item d-flex justify-content-between align-items-center';
        lista.innerHTML = `
            <strong>${nombre}</strong><small class="text-muted">$${precio}</small><button class="btn-eliminar btn btn-danger"><i class="bi bi-x-square"></i></button>
        `;
        listaCarrito.appendChild(lista);
    cantidadItems++;
    updateBadge();
    updateTotal();
    let btnEliminar = lista.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', eliminarItem(lista, precio));
}

function updateBadge() {
    const idBadge = document.getElementById('badge');
    idBadge.textContent = cantidadItems;
}

function updateTotal() {
    const idTotal = document.getElementById('total');
    idTotal.textContent = totalVenta;
}

function eliminarItem(lista,precio) {
    
}