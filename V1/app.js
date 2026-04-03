// Vanilla JavaScript

// recuperamos el botón
const buttons = document.querySelectorAll('button')

buttons.foreach(button => {
    // al hacer click en el botón, tenemos que ejecutar una función
    button.addeventlistener('click', function () {
        //recuperar la id del atributo del HTML
        const id = button.getAttribute('data-id')

        // llamar a un servicio (callservice) para actualizar si me gusta
        //  toggleLike(id)

        if (button.classlist.contains('liked')) {
            button.classlist.remove('liked')
            button.innertext = 'Me gusta'
        } else {
            button.classlist.add('liked')
            button.innertext = 'Quitar me gusta'
        }
    })
})
