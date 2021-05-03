/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

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
          <main>
            <h2>ID</h2>
            <p>{id}</p>
            <h2>Nome</h2>
            <p>{nome}</p>
            <h2>Descrição</h2>
            <p>{descricao}</p>
            <h2>Multa</h2>
            <p>{`R$ ${multa.toFixed(2)}`}</p>
            <h2>Tempo de prisão</h2>
            <p>{`${tempoPrisao} meses`}</p>
            <h2>Status</h2>
            <p>{status === 1 ? 'Ativo' : 'Inativo'}</p>
            <h2>Data de criação</h2>
            <p>{dataCriacao}</p>
          </main>
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
