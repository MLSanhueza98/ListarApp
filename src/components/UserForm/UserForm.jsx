import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button"
import useFormulario from "../../hooks/useFormulario"


const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formulario);
        reset();
    };

    return(
        <form onSubmit={handleSubmit}>
            <Input
                name="name"
                label="Nombre:"
                value={formulario.name}
                onChange={handleChange}
            />
            <Input
                name='description'
                label="Descripción:"
                value={formulario.description}
                onChange={handleChange}
            />
            <Button>Enviar</Button>
        </form>
    );
};

export default UserForm;

