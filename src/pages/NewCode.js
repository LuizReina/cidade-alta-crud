import React from 'react';
import NewCodeForm from '../components/NewCodeForm';

import { CodeFormsBody } from '../styles';

class NewCode extends React.Component {
  render() {
    return (
      <CodeFormsBody>
        <header>
          <h1>Incluir código</h1>
        </header>
        <main>
          <NewCodeForm />
        </main>
      </CodeFormsBody>
    );
  }
}

export default NewCode;
