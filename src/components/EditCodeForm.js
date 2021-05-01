/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewCodeAction } from '../actions';

import './newCodeForm.css';

class EditCodeForm extends React.Component {
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

  componentDidMount() {
    this.fillInputsForEditing();
  }

  fillInputsForEditing() {
    const { identifier, codeList } = this.props;
    const codeToEdit = codeList.filter((code) => code.id === parseInt(identifier, 10));
    this.setState({
      id: codeToEdit[0].id,
      nome: codeToEdit[0].nome,
      descricao: codeToEdit[0].descricao,
      multa: codeToEdit[0].multa,
      tempoPrisao: codeToEdit[0].tempoPrisao,
      status: codeToEdit[0].status,
    });
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
    const newCode = { id, nome, descricao, dataCriacao, multa, tempoPrisao, status };
    const newCodeList = codeList.filter((code) => code.id !== id);
    newCodeList.push(newCode);
    addNewCode(newCodeList);
    e.preventDefault();
  }

  render() {
    const { nome, descricao, multa, tempoPrisao, status } = this.state;
    const { codeList } = this.props;
    return (
      <form className="new-code-form">
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={ nome }
            name="nome"
            placeholder="Ex: Desacato, etc..."
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea
            name="descricao"
            value={ descricao }
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
            value={ multa }
            name="multa"
            placeholder="Valor da multa"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="tempo">
          Tempo de prisão:
          <input
            type="number"
            value={ tempoPrisao }
            name="tempoPrisao"
            placeholder="Tempo em meses"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="status">
          Status:
          <select name="status" value={ status } onChange={ (e) => this.handleChange(e) }>
            <option>1</option>
            <option>2</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ (e) => this.handleSubmit(e, codeList) }
        >
          Editar
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

EditCodeForm.propTypes = {
  codeList: PropTypes.array.isRequired,
  addNewCode: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCodeForm);
