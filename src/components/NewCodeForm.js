/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewCodeAction } from '../actions';

import './newCodeForm.css';

class NewCodeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      descricao: '',
      multa: 0,
      tempo: 0,
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
    const { nome, descricao, multa, tempo, status } = this.state;
    const newCode = { nome, descricao, multa, tempo, status };
    const newCodeList = Object.assign(codeList);
    newCodeList.push(newCode);
    addNewCode(newCodeList);
    e.preventDefault();
  }

  render() {
    const { codeList } = this.props;
    return (
      <form className="new-code-form">
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="nome"
            placeholder="Ex: Desacato, etc..."
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea
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
            name="multa"
            placeholder="Valor da multa"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="tempo">
          Tempo de prisão:
          <input
            type="number"
            name="tempo"
            placeholder="Tempo em meses"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="status">
          Status:
          <select name="status" onChange={ (e) => this.handleChange(e) }>
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
  addNewCode: (newCode) => dispatch(addNewCodeAction(newCode)),
});

NewCodeForm.propTypes = {
  codeList: PropTypes.shape({}).isRequired,
  addNewCode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCodeForm);
