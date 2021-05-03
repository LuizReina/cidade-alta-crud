import React from 'react';
import PropTypes from 'prop-types';
import CodeDetailsTable from '../components/CodeDetailsTable';
import HomepageBtn from '../components/HomepageBtn';


import { CodeDetailsBody } from '../styles/stylesDetails';

class CodeDetails extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <CodeDetailsBody>
        <header>
          <h1>Informações gerais</h1>
        </header>
        <CodeDetailsTable identifier={ id } />
        <footer>
          <HomepageBtn />
        </footer>
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
