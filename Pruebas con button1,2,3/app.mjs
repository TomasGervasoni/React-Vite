// iimportamos la dependencia de react para importar elementos
import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)
// Aqui creamos los elementos
// React.createElement('etiqueta', 'atributos', 'contenido')
const button = React.createElement('button', { 'data-id': 123 }, 'Button 1')
const button2 = React.createElement('button', { 'data-id': 456 }, 'Button 2')
const button3 = React.createElement('button', { 'data-id': 789 }, 'Button 3')

const app = React.createElement(React.Fragment, null, [button, button2, button3])
// Esto es puramente react SIN JSX, es react PURO
// React.createElement es la funcion que se encarga de crear los elementos  
// React.Fragment es un componente que no se renderiza      
// ReactDOM.createRoot es la funcion que se encarga de crear el root
// root.render es la funcion que se encarga de renderizar el elemento

/* y asi seria con JSX:
<React.Fragment>
    <button data-id="123">Button 1</button>
    <button data-id="456">Button 2</button>
    <button data-id="789">Button 3</button>
</React.Fragment>
*/


// Para no renderizar un div
// React tiene un componente/ una forma de envolver 
// cosas con cosas vacías para no renderizarlas
// React.Fragment

root.render(app)
// const response = '<script>hola</script>';
// root.render(React.createElement("h1", null, response));

