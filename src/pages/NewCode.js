import React from 'react';
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
        </main>
      </>
    );
  }
}

export default NewCode;
