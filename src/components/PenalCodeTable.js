/* eslint-disable no-alert */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteCodeActionThunk, filterCodeListThunk } from '../actions';

class PenalCodeTable extends React.Component {
  componentDidMount() {
    const {
      codeList,
      filters: { palavraChave, filtro, ordenacao },
      filterCodeList,
    } = this.props;
    filterCodeList(codeList, palavraChave, filtro, ordenacao);
  }

  render() {
    const { deleteCode } = this.props;
    const { codeList, filteredCodeList } = this.props;
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
              filteredCodeList.map(({ id, nome, dataCriacao, multa, status }) => (
                <tr key={ id }>
                  <td>{nome}</td>
                  <td>{dataCriacao}</td>
                  <td>{multa}</td>
                  <td>{status === 1 ? 'Ativo' : 'Inativo'}</td>
                  <td>
                    <Link to={ `/editcode/${id}` }>Editar</Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={ () => {
                        if (window.confirm(
                          'Tem certeza disso? Essa ação não pode ser desfeita.',
                        )) {
                          deleteCode(id, codeList);
                        }
                      } }
                    >
                      Excluir
                    </button>
                  </td>
                  <td>
                    <Link to={ `/codedetails/${id}` }>Detalhes</Link>
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
  filteredCodeList: state.data.codigoPenalFiltrado,
  filters: state.activeFilters,
});

const mapDispatchToProps = (dispatch) => ({
  filterCodeList: (...data) => dispatch(filterCodeListThunk(...data)),
  deleteCode: (id, codeList) => dispatch(deleteCodeActionThunk(id, codeList)),
});

PenalCodeTable.propTypes = {
  codeList: PropTypes.array.isRequired,
  filteredCodeList: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  deleteCode: PropTypes.func.isRequired,
  filterCodeList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PenalCodeTable);
