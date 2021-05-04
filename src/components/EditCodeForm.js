/* eslint-disable max-lines */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomepageBtn from './HomepageBtn';
import { updateCodeListsAction, includeFiltersAction } from '../actions';

const THREE_SECONDS = 3000;

class EditCodeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      nome: '',
      descricao: '',
      multa: 0,
      tempoPrisao: 0,
      status: '1',
      isConfirmed: false,
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
      status: codeToEdit[0].status.toString(),
    });
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
    const { editCode, includeFilters } = this.props;
    const { id, nome, descricao, multa, tempoPrisao, status } = this.state;
    const dataCriacao = new Date();
    const newCode = {
      id: parseInt(id, 10),
      nome,
      descricao,
      dataCriacao,
      multa: parseInt(multa, 10),
      tempoPrisao: parseInt(tempoPrisao, 10),
      status: parseInt(status, 10),
    };
    const newCodeList = codeList.filter((code) => code.id !== id);
    newCodeList.push(newCode);
    this.confirmEdit();
    includeFilters({
      palavraChave: '',
      filtro: '',
      status: '',
      ordenacao: 'Crescente',
      paginaAtual: 0,
    });
    editCode(newCodeList);
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

  renderName() {
    const { nome } = this.state;
    return (
      <label htmlFor="nome">
        <br />
        Nome
        <br />
        <input
          type="text"
          value={ nome }
          id="nome"
          name="nome"
          placeholder="Ex: Desacato, roubo, etc..."
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
          id="descricao"
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
          id="multa"
          value={ multa }
          name="multa"
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
          value={ tempoPrisao }
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
    const { status } = this.state;
    return (
      <label htmlFor="status">
        <br />
        Status
        <br />
        <select
          id="status"
          name="status"
          value={ `${status === '1' ? '1 - Ativo' : '2 - Inativo'}` }
          onChange={ (e) => this.handleChange(e) }
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
          Confirmar
        </button>
        <HomepageBtn />
      </section>
    );
  }

  render() {
    return (
      <form>
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
  editCode: (newCode) => dispatch(updateCodeListsAction(newCode)),
  includeFilters: (filters) => dispatch(includeFiltersAction(filters)),
});

EditCodeForm.propTypes = {
  codeList: PropTypes.array.isRequired,
  editCode: PropTypes.func.isRequired,
  includeFilters: PropTypes.func.isRequired,
  identifier: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCodeForm);
