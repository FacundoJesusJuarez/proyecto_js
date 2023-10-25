let opcion;

do {
    opcion = parseInt(prompt("Bienvenido por favor seleccione una de las siguientes opciones\n\n1. Sumar el IVA a un producto\n2. Restar el IVA a un producto \n3. Obtener el interés de un plazo fijo \n0. Salir"))
    switch (opcion) {
        case 0:
            alert("Muchas gracias por tu consulta");
            break;
        case 1:
            let valorSinIva = parseInt(prompt("Ingresar monto que deseas calcular"));
            let alicuota = parseInt(prompt("Ingresar valor de alicuota en numero entero (sin el signo de porcentaje)"));
            const suma = (a, b) => a + b
            const ivaSuma = (a, b) => a * (b / 100)
            const obtenerIva = suma(valorSinIva, ivaSuma(valorSinIva, alicuota))
            alert("El monto con el IVA obtenido es " + "" + obtenerIva);
            break;
        case 2:
            let valorConIva = parseInt(prompt("Ingresar monto que deseas calcular"));
            let alicuota2 = parseInt(prompt("Ingresar valor de alicuota en numero entero (sin el signo de porcentaje)"));
            const ivaResta = (a, b) => a / ((b / 100) + 1)
            const restarIva = ivaResta(valorConIva, alicuota2);
            alert("El monto sin el IVA obtenido es " + "" + restarIva);
            break;
        case 3:
            let monto = parseInt(prompt("Ingresar monto que deseas calcular"));
            let interes = parseInt(prompt("Ingresar el valor de la TNA (Tasa de Interes Nominal) sin el signo de porcentaje"));
            let tiempo = parseInt(prompt("Ingresar el tiempo del plazo fijo en días enteros"));
            const tna = x => (x / 12) / 30
            const plazo = (a, b, c) => a + (b * c)
            const interesDiario = tna(interes)
            const plazoFijo = plazo(monto, interesDiario, tiempo)
            alert("El monto final del plazo fijo es de " + "" + plazoFijo);
            break;
        default:
            alert("Opción NO VÁLIDA")
            break;
    }
}
while (opcion !== 0);