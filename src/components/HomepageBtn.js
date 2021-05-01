import React from 'react';
import { Link } from 'react-router-dom';

class HomepageBtn extends React.Component {
  render() {
    return (
      <Link to="/home">Voltar </Link>
    );
  }
}

export default HomepageBtn;
