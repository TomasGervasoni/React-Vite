// JSX es una extension de JS que permite escribir HTML en JS

// Aquí tu describes que interfaz quieres tener, y se renderiza en javascript
// JSX es una sintaxis que se transforma en React.createElement


// Esto es lo que se renderiza "OUTPUT"

import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)

const button = React.createElement('button', { 'data-id': 123 }, 'Button 1')
const button2 = React.createElement('button', { 'data-id': 456 }, 'Button 2')
const button3 = React.createElement('button', { 'data-id': 789 }, 'Button 3')

const app = React.createElement(React.Fragment, null, [button, button2, button3])
root.render(app)


// Y esto es lo que escribimops "INPUT"
/* y asi seria con JSX:
<React.Fragment>
    <button data-id="123">Button 1</button>
    <button data-id="456">Button 2</button>
    <button data-id="789">Button 3</button>
</React.Fragment>
*/









/// Escribimos JSX por que es mas comodo y legible
// Y es un formato mucho más declarativo

// Para entenderlo hay herramientas como "swc" Speedy Web Compiler https://swc.rs/playground
// que nos ayudan a transformar el JSX en React.createElement

// Puedes poner expresiones entre llaves {} Aquí indicas que quieres que se ejecute código JS

// Ejemplo:
/* JSX
 const element = <strong>Numero aleatorio. {Math.random()}</strong>
 */

// Cuando pones expresiones entre llaves indicas que quieres que lo evalúe

// Osea que dentro de llaves no puedes poner un if, un for, un while, etc,
//  Por que estas No son expresiones, Son declaraciones

// Tienes que poner cosas que si devuelvan un valor,
// Evaluar constantes
//  Especificar atributos
// Llamar funciones
//  Usar operadores ternarios


// Para especificar atributos Lo hacemos como si fuera HTML

/* JSX
<button tabIndex="1">Button 1</button>
*/

/// Como podes tener en cuenta el JSX evita la inyección de código

/* JSX
const name = 'Sara';
const element = <h1>Hello, {name}</h1>;
*/

// No nos debería dejar poner
/* 
//  JSX
const response = '<script>hola</script>';
root.render(React.createElement("h1", null, response));
*/

