/* eslint-disable no-alert */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  deleteCodeActionThunk,
  filterCodeListThunk,
  updatePaginationListAction,
  updateActualPageAction,
} from '../actions';

import { BtnExcluir, PaginationBtns } from '../styles';

class PenalCodeTable extends React.Component {
  componentDidMount() {
    this.updatePagination();
  }

  async updatePagination() {
    const { filteredCodeList, updatePaginationList, pages } = this.props;
    const codigoPenalPaginado = [];
    for (let index = 0; index < filteredCodeList.length; index += pages) {
      const pagina = [];
      filteredCodeList.map((code, indexMap) => {
        if (index <= indexMap && indexMap - index < pages) {
          pagina.push(code);
        }
        return '';
      });
      codigoPenalPaginado.push(pagina);
    }
    await updatePaginationList(codigoPenalPaginado);
  }

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
    const { codeList } = this.props;
    const { paginaAtual, paginationCodeList } = this.props;
    const confirmation = 'Você quer mesmo fazer isso? Essa ação não poderá ser desfeita.';
    return (
      <tbody>
        {
          paginationCodeList[paginaAtual]
            .map(({ id, nome, dataCriacao, multa, status }) => (
              <tr
                key={ nome }
              >
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

  renderPaginationBtns() {
    const { filteredCodeList, updateActualPage, pages } = this.props;
    const totalPages = Math.ceil(filteredCodeList.length / pages);
    const paginationBtns = [];
    for (let index = 1; index <= totalPages; index += 1) {
      paginationBtns.push(
        <button
          key={ index }
          type="button"
          onClick={ () => updateActualPage(index) }
        >
          {index}
        </button>,
      );
    }
    return (
      <PaginationBtns>
        {
          paginationBtns.map((element) => element)
        }
      </PaginationBtns>
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
        </table>
        {
          this.renderPaginationBtns()
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
  filteredCodeList: state.data.codigoPenalFiltrado,
  paginationCodeList: state.data.codigoPenalPaginado,
  paginaAtual: state.user.paginaAtual,
});

const mapDispatchToProps = (dispatch) => ({
  filterCodeList: (...data) => dispatch(filterCodeListThunk(...data)),
  deleteCode: (id, codeList) => dispatch(deleteCodeActionThunk(id, codeList)),
  updatePaginationList: (data) => dispatch(updatePaginationListAction(data)),
  updateActualPage: (pageNumber) => dispatch(updateActualPageAction(pageNumber)),
});

PenalCodeTable.propTypes = {
  codeList: PropTypes.array.isRequired,
  filteredCodeList: PropTypes.array.isRequired,
  paginationCodeList: PropTypes.array.isRequired,
  deleteCode: PropTypes.func.isRequired,
  paginaAtual: PropTypes.number.isRequired,
  updatePaginationList: PropTypes.func.isRequired,
  updateActualPage: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PenalCodeTable);
