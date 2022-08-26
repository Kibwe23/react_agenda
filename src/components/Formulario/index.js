import React, { useEffect, useState } from 'react';
import contatos from '../../models/Contatos';
import './style.css';


function Formulario(props) {

    const [dados, setDados] = useState({ id: 0, nome: '', email: '', telefone: '', profissao: '' })

    useEffect(() => {
        setDados(props.contatoAlterar);
    }, [props.contatoAlterar]);

    function handleChange(e) {
        setDados({ ...dados, [e.target.id]: e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (dados.id > 0) {
            //alteracao 
            let indexAlterar = -1;
            props.listaContatos.map((contato, index) => {
                contato.id === props.contatoAlterar.id ? indexAlterar = index : indexAlterar = -1;
            });
            props.listaContatos[indexAlterar] = dados;
            props.setListaContatos([...props.listaContatos]);
        }
        else {
            //inclusão
            const utlimoElemento = props.listaContatos[props.listaContatos.length - 1]
            props.setListaContatos([...props.listaContatos, dados]);
            dados.id = utlimoElemento.id + 1;
        }
        setDados({ id: 0, nome: '', email: '', telefone: '', profissao: '' })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div id='nav'>
                <input id="nome" onChange={handleChange} value={dados.nome} className="input-text" placeholder="Nome" type="text" required />
                <input id="email" onChange={handleChange} value={dados.email} className="input-text" placeholder="Email" type="email" required />
                <input id="telefone" onChange={handleChange} value={dados.telefone} className="input-text" placeholder="Telefone" type="text" required />
                <input id="profissao" onChange={handleChange} value={dados.profissao} className="input-text" placeholder="Profissão" type="text" required />
                <input className="input-btn" type="submit" value="Enviar" />
            </div>
        </form>
    );

}

export default Formulario;