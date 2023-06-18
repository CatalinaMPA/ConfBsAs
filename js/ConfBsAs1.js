
function resumen(){

    const descuento = {
        "none":0,
        "estudiante":80,
        "trainee":50,
        "junior":15
    }

    let cantidadEntradas = document.getElementById("inputCantidad").value    
    let categoria = document.getElementById("inputCategoria").value
    let btnCalcular = document.getElementById("botonCalcular").value
    let totalCompra = document.getElementById("totalCompra").value
    let subtotal = 200 * cantidadEntradas
    let discount = subtotal * descuento[categoria] / 100
    let total = subtotal - discount
    let msj = 'El total a abonar es: $' + total.toString()

    document.getElementById("totalCompra").innerHTML = msj;
}

function reset() {
    document.getElementById("totalCompra").innerHTML = 'Total a Pagar: $';
    document.getElementById("inputCategoria").value = 'estudiante';
    document.getElementById("inputCantidad").value = 1;
}

document.getElementById("botonCalcular").addEventListener("click", resumen)

document.getElementById("botonReset").addEventListener("click", reset)

