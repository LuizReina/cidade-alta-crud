/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { includeFiltersAction, filterCodeListThunk } from '../actions';

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {
      palavraChave: '',
      filtro: 'nome',
      ordenacao: 'crescente',
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value.toLowerCase(),
    });
  }

  async handleSubmit(e) {
    const { palavraChave, filtro, ordenacao } = this.state;
    const {
      includeFilters,
      codeList,
      filterCodeList,
    } = this.props;
    e.preventDefault();
    await includeFilters({ palavraChave, filtro, ordenacao });
    filterCodeList(codeList, palavraChave, filtro, ordenacao);
  }

  render() {
    const { palavraChave } = this.state;
    const filterTypes = ['Nome', 'Multa', 'Status'];
    return (
      <>
        <label htmlFor="palavraChave">
          Palavra-chave:
          <input
            value={ palavraChave }
            id="palavraChave"
            name="palavraChave"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="filtro">
          Filtrar por:
          <select id="filtro" name="filtro" onChange={ (e) => this.handleChange(e) }>
            {
              filterTypes
                .map((filter) => <option key={ filter }>{filter}</option>)
            }
          </select>
        </label>
        <label htmlFor="crescente">
          Crescente
          <input
            type="radio"
            id="crescente"
            name="ordenacao"
            value="crescente"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="decrescente">
          Decrescente
          <input
            type="radio"
            id="decrescente"
            name="ordenacao"
            value="decrescente"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button type="submit" onClick={ (e) => this.handleSubmit(e) }>
          Filtrar!
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
});

const mapDispatchToProps = (dispatch) => ({
  includeFilters: (filters) => dispatch(includeFiltersAction(filters)),
  filterCodeList: (...data) => dispatch(filterCodeListThunk(...data)),
});

Filters.propTypes = {
  codeList: PropTypes.object.isRequired,
  includeFilters: PropTypes.func.isRequired,
  filterCodeList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
