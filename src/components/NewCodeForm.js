/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCodeListsAction } from '../actions';

import './newCodeForm.css';

class NewCodeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      nome: '',
      descricao: '',
      multa: 0,
      tempoPrisao: 0,
      status: 1,
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e, codeList) {
    const { addNewCode } = this.props;
    const { id, nome, descricao, multa, tempoPrisao, status } = this.state;
    const dataCriacao = new Date().toLocaleString();
    const newCode = {
      id: parseInt(id, 10),
      nome,
      descricao,
      dataCriacao,
      multa: parseInt(multa, 10),
      tempoPrisao: parseInt(tempoPrisao, 10),
      status: parseInt(status, 10),
    };
    const newCodeList = Object.assign([], codeList);
    newCodeList.push(newCode);
    addNewCode(newCodeList);
    e.preventDefault();
  }

  render() {
    const { codeList } = this.props;
    return (
      <form className="new-code-form">
        <label htmlFor="id">
          Id:
          <input
            type="number"
            id="id"
            name="id"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Ex: Desacato, etc..."
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea
            id="descricao"
            name="descricao"
            rows="4"
            cols="50"
            maxLength="500"
            placeholder="Máximo de 500 caracteres"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="multa">
          Multa:
          <input
            type="number"
            id="multa"
            name="multa"
            placeholder="Valor da multa"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="tempoPrisao">
          Tempo de prisão:
          <input
            type="number"
            id="tempoPrisao"
            name="tempoPrisao"
            placeholder="Tempo em meses"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="status">
          Status:
          <select id="status" name="status" onChange={ (e) => this.handleChange(e) }>
            <option>1</option>
            <option>2</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ (e) => this.handleSubmit(e, codeList) }
        >
          Adicionar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
});

const mapDispatchToProps = (dispatch) => ({
  addNewCode: (newCode) => dispatch(updateCodeListsAction(newCode)),
});

NewCodeForm.propTypes = {
  codeList: PropTypes.array.isRequired,
  addNewCode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCodeForm);
