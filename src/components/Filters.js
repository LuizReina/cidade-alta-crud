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

import { ActiveFilters } from '../styles';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      palavraChave: props.activeFilters.palavraChave,
      filtro: props.activeFilters.filtro,
      status: '',
      ordenacao: 'Crescente',
    };
  }

  updatePagination() {
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
    await filterCodeList(codeList, palavraChave, filtro, status, ordenacao);
    await updateActualPage(1);
    this.updatePagination();
  }

  renderKeyWord() {
    const { palavraChave } = this.state;
    return (
      <label htmlFor="palavraChave">
        Palavra-chave:
        <input
          value={ palavraChave }
          id="palavraChave"
          name="palavraChave"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderFilterType() {
    const { filtro } = this.state;
    const filterTypes = ['', 'Nome', 'Multa'];
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
          <select name="status" onChange={ (e) => this.handleChange(e) }>
            {
              statusTypes.map((filter) => <option key={ filter }>{filter}</option>)
            }
          </select>
        </label>
      </>
    );
  }

  renderRadioBtns() {
    return (
      <>
        <label htmlFor="crescente">
          <input
            type="radio"
            id="crescente"
            name="ordenacao"
            value="Crescente"
            onChange={ (e) => this.handleChange(e) }
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
          />
          Decrescente
        </label>
      </>
    );
  }

  render() {
    const { activeFilters: { palavraChave, filtro, status, ordenacao } } = this.props;
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
  filterCodeList: (...data) => dispatch(filterCodeListThunk(...data)),
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
  pages: PropTypes.number.isRequired,
  activeFilters: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
