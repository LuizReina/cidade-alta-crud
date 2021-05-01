/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PenalCodeTable from '../components/PenalCodeTable';
import NoCodeList from '../components/NoCodeList';
import AddCodeBtn from '../components/AddCodeBtn';

class Home extends React.Component {
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

Home.propTypes = {
  codeList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(Home);
