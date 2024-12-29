import { useState } from "react"

export const TodoAdd = ({ onNewTodo }) => {
    
    const [ formInput, setFormInput ] = useState('');

    const handleFormInput = ({ target }) => {
        setFormInput( target.value );
    }

    const handleSubmit = ( e ) => {
        
        e.preventDefault();

        if( formInput.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime() * 300,
            description: formInput,
            done: false
        }

        onNewTodo( newTodo );
        setFormInput( '' );

    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    value={ formInput }
                    onChange={ handleFormInput }
                />
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
