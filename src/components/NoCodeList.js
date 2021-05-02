/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NoCodeList extends React.Component {
  render() {
    const { codeList, filteredCodeList } = this.props;
    return (
      codeList.length > 0 && filteredCodeList.length === 0
        ? <h3>Não encontramos nenhum código com os parâmetros informados.</h3>
        : <h3>Não encontramos nenhum código cadastrado no registro de códigos penais.</h3>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
  filteredCodeList: state.data.codigoPenalFiltrado,
});

NoCodeList.propTypes = {
  codeList: PropTypes.array.isRequired,
  filteredCodeList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(NoCodeList);
