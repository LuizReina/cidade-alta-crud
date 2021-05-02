/* eslint-disable no-alert */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteCodeActionThunk, filterCodeListThunk } from '../actions';

import { BtnExcluir } from '../styles';

const NUMBER_OF_RESULTS_PER_PAGE = 15;

class PenalCodeTable extends React.Component {
  renderTableHeader() {
    const headersTabela = ['Nome', 'Data', 'Multa',
      'Status', 'Editar', 'Excluir', 'Detalhes'];
    return (
      <thead>
        <tr>
          {headersTabela.map((header) => <th key={ header }>{ header }</th>)}
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const { deleteCode } = this.props;
    const { codeList, filteredCodeList } = this.props;
    const confirmation = 'Você quer mesmo fazer isso? Essa ação não poderá ser desfeita.';
    return (
      <tbody>
        {
          filteredCodeList.map(({ id, nome, dataCriacao, multa, status }) => (
            <tr key={ id }>
              <td>{nome}</td>
              <td>{dataCriacao}</td>
              <td>{`R$${parseInt(multa, 10).toFixed(2)}`}</td>
              <td>{status === 1 ? 'Ativo' : 'Inativo'}</td>
              <td>
                <Link to={ `/editcode/${id}` }>
                  <span role="img" aria-labelledby="symbol of a hand editing">✍</span>
                </Link>
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
    );
  }

  renderTableFooter() {
    const { filteredCodeList } = this.props;
    const totalPages = Math.ceil(filteredCodeList.length / NUMBER_OF_RESULTS_PER_PAGE);
    const paginationBtns = [];
    for (let index = 1; index <= totalPages; index += 1) {
      paginationBtns.push(<button type="button">{index}</button>);
    }
    return (
      <tfoot>
        {
          paginationBtns.map((element) => element)
        }
      </tfoot>
    );
  }

  render() {
    return (
      <div>
        <table>
          {
            this.renderTableHeader()
          }
          {
            this.renderTableBody()
          }
          {
            this.renderTableFooter()
          }
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
  deleteCode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PenalCodeTable);
