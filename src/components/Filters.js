/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  includeFiltersAction,
  filterCodeListThunk,
  updatePaginationListAction,
  updateActualPageAction,
} from '../actions';

import { ActiveFilters } from '../styles/stylesHome';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      palavraChave: props.activeFilters.palavraChave,
      filtro: props.activeFilters.filtro,
      status: props.activeFilters.status,
      ordenacao: props.activeFilters.ordenacao,
    };
  }

  updatePagination() {
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
    if (codigoPenalPaginado.length === 0) {
      codigoPenalPaginado.push([]);
    }
    updatePaginationList(codigoPenalPaginado);
  }

  async handleChange({ target: { name, value } }) {
    if (name === 'status') {
      value = value.slice(0, 1);
    }
    this.setState({
      [name]: await value,
    }, () => {});
    this.handleSubmit();
  }

  async handleSubmit() {
    const { palavraChave, filtro, ordenacao, status } = this.state;
    const {
      includeFilters,
      codeList,
      filterCodeList,
      updateActualPage,
    } = this.props;
    await includeFilters({ palavraChave, filtro, status, ordenacao });
    await filterCodeList(codeList, { palavraChave, filtro, status, ordenacao });
    await updateActualPage(1);
    this.updatePagination();
  }

  checkStatus() {
    const { status } = this.state;
    if (status === '1') return '1 - Ativo';
    if (status === '2') return '2 - Inativo';
    return '';
  }

  renderKeyWord() {
    const { palavraChave, filtro } = this.state;
    return (
      <label htmlFor="palavraChave">
        Palavra-chave:
        <input
          value={ palavraChave }
          id="palavraChave"
          name="palavraChave"
          onChange={ (e) => this.handleChange(e) }
          disabled={ !filtro }
        />
      </label>
    );
  }

  renderFilterType() {
    const { filtro } = this.state;
    const filterTypes = ['', 'Nome', 'Multa', 'Data'];
    const statusTypes = ['', '1 - Ativo', '2 - Inativo'];
    return (
      <>
        <label htmlFor="filtro">
          Filtrar por:
          <select
            id="filtro"
            name="filtro"
            value={ filtro }
            onChange={ (e) => this.handleChange(e) }
          >
            {
              filterTypes.map((filter) => <option key={ filter }>{filter}</option>)
            }
          </select>
        </label>
        <label htmlFor="status">
          Status:
          <select
            name="status"
            value={ this.checkStatus() }
            onChange={ (e) => this.handleChange(e) }
          >
            {
              statusTypes.map((filter) => <option key={ filter }>{filter}</option>)
            }
          </select>
        </label>
      </>
    );
  }

  renderRadioBtns() {
    const { ordenacao } = this.state;
    return (
      <>
        <label htmlFor="crescente">
          <input
            type="radio"
            id="crescente"
            name="ordenacao"
            value="Crescente"
            onChange={ (e) => this.handleChange(e) }
            checked={ ordenacao === 'Crescente' ? true : false }
          />
          Crescente
        </label>
        <label htmlFor="decrescente">
          <input
            type="radio"
            id="decrescente"
            name="ordenacao"
            value="Decrescente"
            onChange={ (e) => this.handleChange(e) }
            checked={ ordenacao === 'Decrescente' ? true : false }
          />
          Decrescente
        </label>
      </>
    );
  }

  render() {
    const {
      activeFilters: { palavraChave, filtro, status, ordenacao } } = this.props;
    return (
      <>
        {
          this.renderKeyWord()
        }
        <br />
        {
          this.renderFilterType()
        }
        <br />
        {
          this.renderRadioBtns()
        }
        <br />
        <ActiveFilters>
          <span>
            {
              `${palavraChave.length === 0
                ? 'Filtros ativos: ' : `Filtros ativos: ${palavraChave} | `}
               ${filtro === '' ? '' : `${filtro} | `} ${ordenacao}
               ${status === '1' ? '| Ativo' : status === '2' ? '| Inativo' : ''}`
            }
          </span>
        </ActiveFilters>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
  filteredCodeList: state.data.codigoPenalFiltrado,
  activeFilters: state.activeFilters,
});

const mapDispatchToProps = (dispatch) => ({
  includeFilters: (filters) => dispatch(includeFiltersAction(filters)),
  filterCodeList: (codeList, filters) => dispatch(filterCodeListThunk(codeList, filters)),
  updatePaginationList: (pageNumber) => dispatch(updatePaginationListAction(pageNumber)),
  updateActualPage: (pageNumber) => dispatch(updateActualPageAction(pageNumber)),
});

Filters.propTypes = {
  codeList: PropTypes.array.isRequired,
  filteredCodeList: PropTypes.array.isRequired,
  includeFilters: PropTypes.func.isRequired,
  filterCodeList: PropTypes.func.isRequired,
  updatePaginationList: PropTypes.func.isRequired,
  updateActualPage: PropTypes.func.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  activeFilters: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
