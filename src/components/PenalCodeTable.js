/* eslint-disable no-alert */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteCodeActionThunk, filterCodeListThunk } from '../actions';

import { BtnExcluir } from '../styles';

class PenalCodeTable extends React.Component {
  componentDidMount() {
    const {
      codeList,
      filters: { palavraChave, filtro, ordenacao },
      filterCodeList,
    } = this.props;
    filterCodeList(codeList, palavraChave, filtro, ordenacao);
  }

  render() {
    const { deleteCode } = this.props;
    const { codeList, filteredCodeList } = this.props;
    const confirmation = 'Você quer mesmo fazer isso? Essa ação não poderá ser desfeita.';
    const headersTabela = ['Nome', 'Data', 'Multa',
      'Status', 'Editar', 'Excluir', 'Detalhes'];
    return (
      <div>
        <table>
          <thead>
            <tr>
              {headersTabela.map((header) => <th key={ header }>{ header }</th>)}
            </tr>
          </thead>
          <tbody>
            {
              filteredCodeList.map(({ id, nome, dataCriacao, multa, status }) => (
                <tr key={ id }>
                  <td>{nome}</td>
                  <td>{dataCriacao}</td>
                  <td>{`R$${multa.toFixed(2)}`}</td>
                  <td>{status === 1 ? 'Ativo' : 'Inativo'}</td>
                  <td>
                    <Link to={ `/editcode/${id}` }>✍</Link>
                  </td>
                  <td>
                    <BtnExcluir
                      type="button"
                      onClick={ () => {
                        if (window.confirm(confirmation)) deleteCode(id, codeList);
                      } }
                    >
                      ✘
                    </BtnExcluir>
                  </td>
                  <td>
                    <Link to={ `/codedetails/${id}` }>⁉</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
  filteredCodeList: state.data.codigoPenalFiltrado,
  filters: state.activeFilters,
});

const mapDispatchToProps = (dispatch) => ({
  filterCodeList: (...data) => dispatch(filterCodeListThunk(...data)),
  deleteCode: (id, codeList) => dispatch(deleteCodeActionThunk(id, codeList)),
});

PenalCodeTable.propTypes = {
  codeList: PropTypes.array.isRequired,
  filteredCodeList: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  deleteCode: PropTypes.func.isRequired,
  filterCodeList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PenalCodeTable);
