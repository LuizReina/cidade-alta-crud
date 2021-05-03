/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AddCodeBtnStyle } from '../styles/stylesHome';

class AddCodeBtn extends React.Component {
  render() {
    const { filteredCodeList } = this.props;
    return (
      <AddCodeBtnStyle>
        {
          filteredCodeList.length > 0
            ? <Link to="/newcode">Adicionar novo código </Link>
            : <Link to="/newcode">Que tal adicionarmos um agora?</Link>
        }
      </AddCodeBtnStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredCodeList: state.data.codigoPenal,
});

AddCodeBtn.propTypes = {
  filteredCodeList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(AddCodeBtn);
