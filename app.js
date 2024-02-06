//Efecto de cambio de imagen:
//● Agrega una función a la imagen de la sección de bienvenida.
//● Cambia la imagen por otra cuando el mouse está sobre ella.
//● Agrega una función para revertir la imagen a la original cuando el
//mouse sale.

const imagenBienvenida = document.getElementById('imagenBienvenida');
imagenBienvenida.addEventListener('mouseenter', () => {
    imagenBienvenida.src = 'images/Sheroz Mir_pic2.png';
});

imagenBienvenida.addEventListener('mouseleave', () => {
    imagenBienvenida.src = 'images/Sheroz Mir_pic.png';
});

//Mostrar más información en la sección de My Portfolio:
//● Agrega un botón "Saber más" a cada tarjeta de la sección de Portfolio.
//● Añade un estilo a la cards para mostrar una caja superpuesta con más
//texto al hacer click en ‘saber más’, la misma incluye un botón de
//GitHub en la caja superpuesta que lleva al repositorio. Agrega un botón
//"Cerrar" en la caja superpuesta para cerrarla y volver a la vista original.

//voy a construir 3 funciones 1 que me va a cerrar las cajas superpuestas, otra que me va a
//ABRIR las cajas cerradas, y la ultima que va a hacer que yo pueda hacer todo esto cuando haga 
//click en saber mas y la x de cerrar

let closeIcono = document.querySelectorAll('.closeIcono');
let saberMas = document.querySelectorAll('.saberMas');
let saberMasCajaDesplegablePadre = document.querySelector('.saberMasCajaDesplegablePadre');

function openBox(box) {
    box.style.display = 'block'
};

function closeBOX(box) {
    box.style.display = 'none'
};


saberMas.forEach(function (saberMasBtn) {
    saberMasBtn.addEventListener('click', function () {
        const unaCajaPadre = saberMasBtn.closest('.tarjeta').querySelector('.saberMasCajaDesplegablePadre')
        openBox(unaCajaPadre)
    })
});
closeIcono.forEach(function (closeIcon) {
    closeIcon.addEventListener('click', function () {
        const unaCajaPadreCerrar = closeIcon.closest('.saberMasCajaDesplegablePadre');
        closeBOX(unaCajaPadreCerrar)
    })
})


//Mensaje de "Enviado con éxito" en el formulario:
//● Agrega un evento al formulario. Dentro del evento, muestra un mensaje
//"Enviado con éxito". al hacer click en el botón de ‘enviar’ Dicho mensaje
//debe mostrarse debajo del botón en la misma página.

const button = document.getElementById('buttonForm')

button.addEventListener('click', function () {

    const name = document.getElementById('nameInput').value
    const phone = document.getElementById('phoneInput').value
    const email = document.getElementById('emailInput').value
    const subject = document.getElementById('subjectInput').value
    const message = document.getElementById('messageInput').value

    if (name === '' || phone === '' || email === '' || subject === '' || message === '') { return alert('Por favor completa todos los campos antes de enviar el mensaje 😎') } else {
        return alert('Enviado con éxito 😀')
    }
})

//Slider para las cards en la sección "What I Do":
//● Agrupa todas las cards en una fila utilizando un contenedor. Establece
//un ancho fijo al contenedor para que solo se muestre una parte.
//● Crea un ‘slider’ agregando así botones de desplazamiento (izquierda y
//derecha) para cambiar la posición del contenedor y mostrar más cards.


const slider = document.querySelector('.superior');
const left = document.querySelector('.botonLeft');
const right = document.querySelector('.botonRight');
const sliderCards = document.querySelectorAll('.superior .tarjeta');

let indexSlider = 0;

function sliderFuncion(direction) {
    indexSlider += direction;

    if (indexSlider < 0) {
        indexSlider = sliderCards.length - 4;
    } else if (indexSlider >= sliderCards.length - 3) {
        indexSlider = 0;
    } //le estoy restando 3 porque es la unica forma de que pudiera regresar al index 0 al llegar a la ultima card. Por alguna razon quedaban espacios en blanco.

    // Añadimos una transición temporal

    let variableDeDesplazamiento = -indexSlider * 100;
    slider.style.transform = `translateX(${variableDeDesplazamiento}%)`;

}

left.addEventListener('click', function () {
    sliderFuncion(-1);
});

right.addEventListener('click', function () {
    sliderFuncion(1);
});

//Trate de todas las formas de que retornara a mi index 0 pero no lo hizo es como si hubiera algo interfiriendo

//EXTRA: POP-UP CONTAINTER

const iconoCierre = document.querySelector('.closeIcono1');
const popupCaja = document.getElementById('popupContenedor');
const overlay = document.getElementById('overlay');
const boton=document.getElementById('submitPopup')
const input=document.getElementById('inputPopup')

function closeBoxPopup(cajaCerrar) {
    cajaCerrar.style.display = 'none';
    overlay.style.display= 'none';
}

function openBoxPopup() {
    popupCaja.style.display = 'flex';
    overlay.style.display= 'block'
}

function bodyBackground(){
    body.style.background='rgba(0, 0, 0, 0.457)'
}

boton.addEventListener('click',function(){
if(boton && input.value.trim() !== ''){
    return alert('Gracias por tu interes! Te contactaremos brevemente! 😀');
} else if (boton && input.value.trim() === '') {
    return alert('Por favor completa el campo vacío') ;
}
})

if (iconoCierre) {
    iconoCierre.addEventListener('click', function () {
        const cajaDesplegablePopup = iconoCierre.closest('#popupContenedor');
        closeBoxPopup(cajaDesplegablePopup);
    });
}

setTimeout(openBoxPopup, 3000);




