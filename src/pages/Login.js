/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { loginAction, saveReduxDataAction } from '../actions';
import { fetchData } from '../services/apiRequest';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      senha: '',
    };
  }

  getData() {
    const { saveReduxData } = this.props;
    const fetchAndDispatchData = async () => {
      const penalCodeFetched = await fetchData('codigopenal');
      const dataFetched = penalCodeFetched;
      saveReduxData(dataFetched);
    };
    fetchAndDispatchData();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nome, senha } = this.state;
    const { loggingIn } = this.props;
    const fetchAndAuthLogin = async () => {
      const userList = await fetchData('usuarios');
      const haveUser = userList
        .some((user) => user.nome === nome && user.senha === senha);
      if (haveUser) {
        this.getData();
        loggingIn(nome);
        return;
      }
      this.setState({
        nome: '',
        senha: '',
      });
      return alert('Nome ou senha inválidos, tente novamente.');
    };
    fetchAndAuthLogin();
  }

  render() {
    const { nome, senha } = this.state;
    const { authenticated } = this.props;
    return (
      <main>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="nome"
            value={ nome }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            name="senha"
            value={ senha }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button type="submit" onClick={ (e) => this.handleSubmit(e) }>Acessar!</button>
        {
          authenticated
            ? <Redirect to="/home" />
            : ''
        }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loggingIn: (nome) => dispatch(loginAction(nome)),
  saveReduxData: (data) => dispatch(saveReduxDataAction(data)),
});

Login.propTypes = {
  saveReduxData: PropTypes.func.isRequired,
  loggingIn: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
