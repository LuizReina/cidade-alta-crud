import React from 'react';
import { Link } from 'react-router-dom';
import NewCodeForm from '../components/NewCodeForm';

class NewCode extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Incluir código</h1>
        </header>
        <main>
          <NewCodeForm />
          <button type="button">
            <Link to="/home">Voltar</Link>
          </button>
        </main>
      </>
    );
  }
}

export default NewCode;
