function hola (nombre, miCallback) {
    setTimeout(() => {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla Bla Bla Bla...');
        callbackHablar();
    }, 1000);
}

function adios (nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}

// -- 


console.log('Iniciando proceso...');
hola('Carlos', function (nombre) {
    hablar(function () {
        hablar(function () {
            adios(nombre, function() {
                console.log('Terminando proceso...');
            })
        })     
    })   
});