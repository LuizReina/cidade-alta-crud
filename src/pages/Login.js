/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import {
  loginAction,
  updateCodeListsAction,
  startLoadingAction,
  stopLoadingAction,
} from '../actions';

import { fetchData } from '../services/apiRequest';

import logo from '../imgs/logo.png';
import { LoginStyle } from '../styles/stylesLogin';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      senha: '',
    };
  }

  getData() {
    const { saveApiResponse } = this.props;
    const fetchAndDispatchData = async () => {
      const penalCodeFetched = await fetchData('codigopenal');
      await saveApiResponse(penalCodeFetched);
    };
    fetchAndDispatchData();
  }

  async fetchAndAuthLogin() {
    const { nome, senha } = this.state;
    const { login, stopLoading } = this.props;
    const userList = await fetchData('usuarios');
    const haveUser = userList
      .some((user) => user.nome === nome && user.senha === senha);
    if (haveUser) {
      this.getData();
      login(nome);
      return;
    }
    this.setState({
      nome: '',
      senha: '',
    });
    stopLoading();
    return alert('Nome ou senha inválidos, tente novamente.');
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e) {
    const { startLoading } = this.props;
    e.preventDefault();
    startLoading();
    this.fetchAndAuthLogin();
  }

  render() {
    const { nome, senha } = this.state;
    const { authenticated, isLoading } = this.props;
    return (
      <LoginStyle>
        <main>
          <img src={ logo } alt="logotipo cidade alta - season 2" />
          <section>
            <label htmlFor="nome">
              Nome
              <input
                type="text"
                name="nome"
                value={ nome }
                onChange={ (e) => this.handleChange(e) }
              />
            </label>
            <label htmlFor="senha">
              Senha
              <input
                type="password"
                name="senha"
                value={ senha }
                onChange={ (e) => this.handleChange(e) }
              />
            </label>
          </section>
          <button type="submit" onClick={ (e) => this.handleSubmit(e) }>Acessar</button>
          {
            isLoading
              ? <Loading />
              : ''
          }
          {
            authenticated
              ? <Redirect to="/home" />
              : ''
          }
        </main>
      </LoginStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (nome) => dispatch(loginAction(nome)),
  startLoading: () => dispatch(startLoadingAction()),
  stopLoading: () => dispatch(stopLoadingAction()),
  saveApiResponse: (data) => dispatch(updateCodeListsAction(data)),
});

Login.propTypes = {
  saveApiResponse: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  stopLoading: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
