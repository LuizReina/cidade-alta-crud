/* eslint-disable no-alert */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  deleteCodeActionThunk,
  updatePaginationListAction,
  updateActualPageAction,
} from '../actions';

import editIcon from '../imgs/editIcon.png';
import deleteIcon from '../imgs/deleteIcon.png';
import detailsIcon from '../imgs/detailsIcon.png';
import { Td, PaginationBtns, BtnExcluir } from '../styles/stylesHome';

class PenalCodeTable extends React.Component {
  componentDidMount() {
    this.updatePagination();
  }

  convertData(dataCriacao) {
    const newDate = new Date(dataCriacao);
    const fullDate = `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`;
    return fullDate;
  }

  async updatePagination() {
    const { filteredCodeList, updatePaginationList, resultsPerPage } = this.props;
    const codigoPenalPaginado = [];
    for (let index = 0; index < filteredCodeList.length; index += resultsPerPage) {
      const pagina = [];
      filteredCodeList.map((code, indexMap) => {
        if (index <= indexMap && indexMap - index < resultsPerPage) {
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
    const { deleteCode, codeList, actualPage,
      paginationCodeList, activeFilters } = this.props;
    const confirmation = 'Você quer mesmo fazer isso? Essa ação não poderá ser desfeita.';
    return (
      <tbody>
        {
          paginationCodeList[actualPage]
            .map(({ id, nome, dataCriacao, multa, status }) => (
              <tr
                key={ id }
              >
                <td>{nome}</td>
                <td>{ this.convertData(dataCriacao) }</td>
                <td>{`R$${parseInt(multa, 10).toFixed(2)}`}</td>
                <Td id={ status }>{status === 1 ? 'Ativo' : 'Inativo'}</Td>
                <td>
                  <Link to={ `/editcode/${id}` }>
                    <img src={ editIcon } alt="edit symbol" />
                  </Link>
                </td>
                <td>
                  <BtnExcluir
                    type="button"
                    onClick={ async () => {
                      if (window.confirm(confirmation)) {
                        await deleteCode(id, codeList, activeFilters);
                        this.updatePagination();
                      }
                    } }
                  >
                    <img src={ deleteIcon } alt="delete symbol" />
                  </BtnExcluir>
                </td>
                <td>
                  <Link to={ `/codedetails/${id}` }>
                    <img src={ detailsIcon } alt="see more details symbol" />
                  </Link>
                </td>
              </tr>
            ))
        }
      </tbody>
    );
  }

  renderPaginationBtns() {
    const { filteredCodeList, updateActualPage, resultsPerPage, actualPage } = this.props;
    const totalPages = Math.ceil(filteredCodeList.length / resultsPerPage);
    const paginationBtns = [];
    for (let index = 1; index <= totalPages; index += 1) {
      paginationBtns.push(
        <PaginationBtns
          type="button"
          actualPage={ actualPage + 1 }
          key={ index }
          onClick={ () => updateActualPage(index) }
        >
          {index}
        </PaginationBtns>,
      );
    }
    return (
      <div>
        {
          paginationBtns.length > 1
            ? paginationBtns.map((element) => element)
            : ''
        }
      </div>
    );
  }

  render() {
    return (
      <section>
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
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
  filteredCodeList: state.data.codigoPenalFiltrado,
  paginationCodeList: state.data.codigoPenalPaginado,
  actualPage: state.user.paginaAtual,
  activeFilters: state.activeFilters,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCode: (...data) => dispatch(deleteCodeActionThunk(...data)),
  updatePaginationList: (data) => dispatch(updatePaginationListAction(data)),
  updateActualPage: (pageNumber) => dispatch(updateActualPageAction(pageNumber)),
});

PenalCodeTable.propTypes = {
  activeFilters: PropTypes.object.isRequired,
  codeList: PropTypes.array.isRequired,
  filteredCodeList: PropTypes.array.isRequired,
  paginationCodeList: PropTypes.array.isRequired,
  deleteCode: PropTypes.func.isRequired,
  updatePaginationList: PropTypes.func.isRequired,
  updateActualPage: PropTypes.func.isRequired,
  actualPage: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PenalCodeTable);
