import React from 'react';
import './style.css';

function TabelaItem(props) {
    return (
        <tr id={props.index}>
            <td>{props.contatoItem.id}</td>
            <td>{props.contatoItem.nome}</td>
            <td>{props.contatoItem.email}</td>
            <td>{props.contatoItem.telefone}</td>
            <td>{props.contatoItem.profissao}</td>
            <td><button className='remove-btn' onClick={() => props.handleRemover(props.index)}>Remover</button></td>
            <td><button className='altera-btn' onClick={() => props.handleAlterar(props.index)} >Alterar</button></td>
        </tr>
    );
}

function Tabela(props) {

    return (
        <table id='minhaTabela'>
            <thead>
                <tr id='0'>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Profissão</th>
                    <th>Excluir</th>
                    <th>Atualizar</th>
                </tr>
            </thead>
            <tbody>
                {props.listaContatos.map((contato, index) => (
                    <TabelaItem key={index}
                        index={index}
                        contatoItem={contato}
                        handleRemover={props.handleRemover}
                        handleAlterar={props.handleAlterar}
                    />
                ))}
            </tbody>
        </table>
    );
}


export default Tabela;