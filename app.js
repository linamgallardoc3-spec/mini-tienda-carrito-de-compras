const botonesAgregar = document.querySelectorAll('.btn-agregar');
const botonVaciarCarrito = document.getElementById('btn-vaciar');
const idMensaje = document.getElementById('mensaje');
let cantidadItems = 0;
let totalVenta = 0;

botonesAgregar.forEach(botonAgrerar => {
    botonAgrerar.addEventListener('click', function() {
        const nombreProducto = botonAgrerar.dataset.nombre;
        const precioProducto = botonAgrerar.dataset.precio;
        agregarAlCarrito(nombreProducto,precioProducto);
    });
});
botonVaciarCarrito.addEventListener('click', function () {
    const listaCarrito = document.querySelectorAll('.lista-producto');
    listaCarrito.forEach(producto => {
        producto.remove();
    });
    idMensaje.style.display = 'block'
    totalVenta = 0;
    cantidadItems = 0;
    updateBadge();
    updateTotal();
})

function agregarAlCarrito(nombre,precio) {
    let precioIn = parseInt(precio);
    totalVenta = totalVenta + precioIn;
    idMensaje.style.display = 'none'
    const listaCarrito = document.getElementById('lista-carrito');
    let lista = document.createElement('li');
    lista.className = 'lista-producto list-group-item d-flex justify-content-between align-items-center';
        lista.innerHTML = `
            <strong>${nombre}</strong><small class="text-muted">$${precioIn}</small><button class="btn-eliminar btn btn-danger"><i class="bi bi-x-square"></i></button>
        `;
        listaCarrito.appendChild(lista);
    const btnEliminar = lista.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', function(){
        eliminarItem( lista,precioIn)
    });
    cantidadItems++;
    updateBadge();
    updateTotal();

}

function updateBadge() {
    const idBadge = document.getElementById('badge');
    idBadge.textContent = cantidadItems;
}

function updateTotal() {
    const idTotal = document.getElementById('total');
    idTotal.textContent = totalVenta.toLocaleString('es-CR', { minimumFractionDigits: 2});
}

function eliminarItem(lista,precio) {
    lista.remove();
    totalVenta = totalVenta - precio;
    cantidadItems --;
    console.log(totalVenta);
    console.log(cantidadItems);
    updateBadge();
    updateTotal();
}