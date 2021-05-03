import React from 'react';
import PropTypes from 'prop-types';
import EditCodeForm from '../components/EditCodeForm';

import { CodeFormsBody } from '../styles/stylesForms';

class EditCode extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <CodeFormsBody>
        <>
          <header>
            <h1>Edição de código</h1>
          </header>
          <main>
            <EditCodeForm identifier={ id } />
          </main>
        </>
      </CodeFormsBody>
    );
  }
}

EditCode.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditCode;
