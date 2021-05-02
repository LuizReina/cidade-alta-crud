/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomepageBtn from './HomepageBtn';
import { updateCodeListsAction } from '../actions';

const THREE_SECONDS = 3000;

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
      isConfirmed: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e, codeList) {
    e.preventDefault();
    this.confirmEdit();
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
  }

  confirmEdit() {
    this.setState({ isConfirmed: true });
    setTimeout(() => { this.setState({ isConfirmed: false }); }, THREE_SECONDS);
  }

  confirmationSpan() {
    const { isConfirmed } = this.state;
    if (isConfirmed) return <span>Código alterado com sucesso!</span>;
    return '';
  }

  renderId() {
    return (
      <label htmlFor="id">
        <br />
        Id:
        <br />
        <input
          type="number"
          id="id"
          name="id"
          min="0"
          placeholder="Número identificador"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderName() {
    return (
      <label htmlFor="nome">
        <br />
        Nome:
        <br />
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Ex: Desacato, etc..."
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderDescription() {
    return (
      <label htmlFor="descricao">
        <br />
        Descrição:
        <br />
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
    );
  }

  renderFine() {
    return (
      <label htmlFor="multa">
        <br />
        Multa:
        <br />
        <input
          type="number"
          id="multa"
          name="multa"
          min="0"
          placeholder="Valor da multa"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderJailTime() {
    return (
      <label htmlFor="tempoPrisao">
        <br />
        Tempo de prisão:
        <br />
        <input
          type="number"
          id="tempoPrisao"
          name="tempoPrisao"
          min="0"
          placeholder="Tempo em meses"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderStatus() {
    return (
      <label htmlFor="status">
        <br />
        Status:
        <br />
        <select id="status" name="status" onChange={ (e) => this.handleChange(e) }>
          <option>1</option>
          <option>2</option>
        </select>
      </label>
    );
  }

  renderBtns() {
    const { codeList } = this.props;
    return (
      <section>
        <button
          type="submit"
          onClick={ (e) => this.handleSubmit(e, codeList) }
        >
          Adicionar
        </button>
        <HomepageBtn />
      </section>
    );
  }

  render() {
    return (
      <form>
        {
          this.renderId()
        }
        {
          this.renderName()
        }
        {
          this.renderDescription()
        }
        {
          this.renderFine()
        }
        {
          this.renderJailTime()
        }
        {
          this.renderStatus()
        }
        {
          this.renderBtns()
        }
        {
          this.confirmationSpan()
        }
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
