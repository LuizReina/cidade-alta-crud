import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class AddCodeBtn extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={ () => <Redirect to="/newcode" /> }
      >
        <Link to="/newcode">Adicionar código </Link>
      </button>
    );
  }
}

export default AddCodeBtn;
