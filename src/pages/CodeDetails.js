import React from 'react';
import PropTypes from 'prop-types';
import CodeDetailsTable from '../components/CodeDetailsTable';

import { CodeDetailsBody } from '../styles';

class CodeDetails extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <CodeDetailsBody>
        <header>
          <h1>Informações gerais</h1>
        </header>
        <main>
          <CodeDetailsTable identifier={ id } />
        </main>
      </CodeDetailsBody>
    );
  }
}

CodeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default CodeDetails;
