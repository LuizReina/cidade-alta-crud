import React from 'react';
import { Link } from 'react-router-dom';

class AddCodeBtn extends React.Component {
  render() {
    return (
      <Link to="/newcode">Adicionar novo código </Link>
    );
  }
}

export default AddCodeBtn;
