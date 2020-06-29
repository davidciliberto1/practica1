import React from 'react'

const Input = () => {
    return (
        <div>
            <h1>Manejando el Input</h1>
            <form>
                <p><input type='text' placeholder='Ingrese input...' name='nombre'  ></input></p>
                <p><button>Add</button></p>
            </form>
    <p>El nombre es: </p>
        </div>
    )
}

export default Input
