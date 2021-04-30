import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PenalCodeTable from '../components/PenalCodeTable';
import NoCodeList from '../components/NoCodeList';
import AddCodeBtn from '../components/AddCodeBtn';
import { saveReduxDataAction } from '../actions';
import { fetchPenalCode, fetchStatus } from '../services/apiRequest';

class Home extends React.Component {
  componentDidMount() {
    const { saveReduxData } = this.props;
    const fetchAndDispatchData = async () => {
      const penalCodeFetched = await fetchPenalCode();
      const statusFetched = await fetchStatus();
      const dataFetched = [penalCodeFetched, statusFetched];
      saveReduxData(dataFetched);
    };
    fetchAndDispatchData();
  }

  render() {
    const { codeList } = this.props;
    return (
      <>
        <header>
          <h1>Código Penal</h1>
          <h3>Filtros aqui</h3>
        </header>
        <main>
          {
            codeList.length <= 0
              ? <NoCodeList />
              : <PenalCodeTable />
          }
          <AddCodeBtn />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
});

const mapDispatchToProps = (dispatch) => ({
  saveReduxData: (data) => dispatch(saveReduxDataAction(data)),
});

Home.propTypes = {
  saveReduxData: PropTypes.func.isRequired,
  codeList: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
