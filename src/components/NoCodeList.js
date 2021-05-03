/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { NoCodeMsg } from '../styles/stylesHome';

class NoCodeList extends React.Component {
  render() {
    const { codeList, filteredCodeList } = this.props;
    return (
      codeList.length > 0 && filteredCodeList.length === 0
        ? <NoCodeMsg>Não encontramos nenhum código com os parâmetros informados.</NoCodeMsg>
        : <NoCodeMsg>Não encontramos nenhum código cadastrado no registro de códigos penais.</NoCodeMsg>
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
