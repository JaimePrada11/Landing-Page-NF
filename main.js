const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

const form = document.getElementById('registroFormulario');
const thankYouMessage = document.getElementById('thankYouMessage');

// Agregamos el evento submit al formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenimos el envío del formulario

    // Obtenemos los valores de los campos
    const email = document.getElementById('email').value;
    const pais = document.getElementById('pais').value;

    // Almacenamos los valores en el localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('pais', pais);

    // Ocultamos el formulario y mostramos el mensaje de agradecimiento
    form.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
});


