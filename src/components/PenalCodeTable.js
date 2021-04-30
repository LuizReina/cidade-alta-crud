import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCodeActionThunk } from '../actions';

class PenalCodeTable extends React.Component {
  editCode(id) {
    console.log(id);
  }

  render() {
    const { deleteCode } = this.props;
    const { codeList } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data</th>
              <th>Multa</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              codeList.map(({ id, nome, dataCriacao, multa, status }) => (
                <tr key={ id }>
                  <td>{nome}</td>
                  <td>{dataCriacao}</td>
                  <td>{multa}</td>
                  <td>{status === 1 ? 'Ativo' : 'Inativo'}</td>
                  <td>
                    <button
                      type="button"
                      onClick={ () => this.editCode(id) }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={ () => deleteCode(id, codeList) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCode: (id, codeList) => dispatch(deleteCodeActionThunk(id, codeList)),
});

PenalCodeTable.propTypes = {
  codeList: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  deleteCode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PenalCodeTable);
