/* eslint-disable max-lines */
/* eslint-disable no-alert */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomepageBtn from './HomepageBtn';
import { updateCodeListsAction, includeFiltersAction } from '../actions';

const THREE_SECONDS = 3000;

class NewCodeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      nome: '',
      descricao: '',
      multa: '',
      tempoPrisao: '',
      status: '1',
      isConfirmed: false,
    };
  }

  handleChange({ target: { name, value } }) {
    if (name === 'status') {
      value = value.slice(0, 1);
    }
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e, codeList) {
    e.preventDefault();
    const { addNewCode, includeFilters } = this.props;
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
    if (
      id === '' || nome === '' || descricao === '' || multa === '' || tempoPrisao === ''
    ) return alert('Todos os campos são obrigatórios.');
    this.confirmEdit();
    includeFilters({
      palavraChave: '',
      filtro: '',
      status: '',
      ordenacao: 'Crescente',
      paginaAtual: 0,
    });
    addNewCode(newCodeList);
  }

  confirmEdit() {
    this.setState({
      id: '',
      nome: '',
      descricao: '',
      multa: '',
      tempoPrisao: '',
      status: '1',
      isConfirmed: true,
    });
    setTimeout(() => { this.setState({ isConfirmed: false }); }, THREE_SECONDS);
  }

  confirmationSpan() {
    const { isConfirmed } = this.state;
    if (isConfirmed) return <span>Código adicionado com sucesso!</span>;
    return '';
  }

  renderId() {
    const { id } = this.state;
    return (
      <label htmlFor="id">
        <br />
        Id
        <br />
        <input
          type="number"
          name="id"
          value={ id }
          min="0"
          placeholder="Número identificador"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderName() {
    const { nome } = this.state;
    return (
      <label htmlFor="nome">
        <br />
        Nome
        <br />
        <input
          type="text"
          name="nome"
          value={ nome }
          placeholder="Ex: Desacato, etc..."
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderDescription() {
    const { descricao } = this.state;
    return (
      <label htmlFor="descricao">
        <br />
        Descrição
        <br />
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
    );
  }

  renderFine() {
    const { multa } = this.state;
    return (
      <label htmlFor="multa">
        <br />
        Multa
        <br />
        <input
          type="number"
          name="multa"
          value={ multa }
          min="0"
          placeholder="Valor da multa"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderJailTime() {
    const { tempoPrisao } = this.state;
    return (
      <label htmlFor="tempoPrisao">
        <br />
        Tempo de prisão
        <br />
        <input
          type="number"
          name="tempoPrisao"
          value={ tempoPrisao }
          min="0"
          placeholder="Tempo em meses"
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderStatus() {
    const { status } = this.state;
    return (
      <label htmlFor="status">
        <br />
        Status
        <br />
        <select
          name="status"
          onChange={ (e) => this.handleChange(e) }
          value={ `${status === '1' ? '1 - Ativo' : '2 - Inativo'}` }
        >
          <option>1 - Ativo</option>
          <option>2 - Inativo</option>
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
  includeFilters: (filters) => dispatch(includeFiltersAction(filters)),
});

NewCodeForm.propTypes = {
  codeList: PropTypes.array.isRequired,
  addNewCode: PropTypes.func.isRequired,
  includeFilters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCodeForm);
