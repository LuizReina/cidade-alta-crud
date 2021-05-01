/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import HomepageBtn from './HomepageBtn';
import './codeDetails.css';

class CodeDetailsTable extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      nome: '',
      descricao: '',
      dataCriacao: '',
      multa: 0,
      tempoPrisao: 0,
      status: 1,
      existsID: true,
    };
  }

  componentDidMount() {
    this.mapDetails();
  }

  mapDetails() {
    const { identifier, codeList } = this.props;
    const codeDetails = codeList.find((code) => code.id === parseInt(identifier, 10));
    if (codeDetails !== undefined || null) {
      this.setState({
        id: codeDetails.id,
        nome: codeDetails.nome,
        descricao: codeDetails.descricao,
        dataCriacao: codeDetails.dataCriacao,
        multa: codeDetails.multa,
        tempoPrisao: codeDetails.tempoPrisao,
        status: codeDetails.status,
      });
    } else {
      this.setState({ existsID: false });
    }
  }

  render() {
    const { id, nome, descricao, dataCriacao,
      multa, tempoPrisao, status, existsID } = this.state;
    return (
      existsID
        ? (
          <section className="code-details-container">
            <section className="code-details-row-container">
              <section className="code-details-row">
                <h3>ID: </h3>
                <p>{id}</p>
              </section>
              <section className="code-details-row">
                <h3>Nome: </h3>
                <p>{nome}</p>
              </section>
              <section className="code-details-row">
                <h3>Descrição: </h3>
                <p>{descricao}</p>
              </section>
              <section className="code-details-row">
                <h3>Multa: </h3>
                <p>{`R$ ${multa.toFixed(2)}`}</p>
              </section>
              <section className="code-details-row">
                <h3>Tempo de prisão: </h3>
                <p>{`${tempoPrisao} meses`}</p>
              </section>
              <section className="code-details-row">
                <h3>Status: </h3>
                <p>{status === 1 ? 'Ativo' : 'Inativo'}</p>
              </section>
              <section className="code-details-row">
                <h3>Data de criação: </h3>
                <p>{dataCriacao}</p>
              </section>
            </section>
            <HomepageBtn />
          </section>
        )
        : <Redirect to="/notfound" />
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
});

CodeDetailsTable.propTypes = {
  identifier: PropTypes.string.isRequired,
  codeList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(CodeDetailsTable);
