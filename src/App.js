import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import { useEffect, useState } from 'react';
import contatos from './models/Contatos';

function App() {
  const [listaContatos, setListaContatos] = useState([]);
  const [contatoAlterar, setContatoAlterar] = useState({});
  useEffect(() => {
    setListaContatos(contatos);
  }, {});

  function handleRemover(index) {
    setListaContatos([
      ...listaContatos.slice(0, index),
      ...listaContatos.slice(index + 1, listaContatos.length)
    ]);
  }

  function handleAlterar(index) {
    const contatoSelecionado = listaContatos[index];
    setContatoAlterar(contatoSelecionado);

  }

  return (
    <>
      <Header />
      <main>
        <section id="tabela">
          <Formulario
            contatoAlterar={contatoAlterar}
            listaContatos={listaContatos}
            setListaContatos={setListaContatos}
          />
          <Tabela
            listaContatos={listaContatos}
            handleRemover={handleRemover}
            handleAlterar={handleAlterar}
          />
        </section>
      </main>
    </>
  );
}

export default App;
