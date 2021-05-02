/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PenalCodeTable from '../components/PenalCodeTable';
import NoCodeList from '../components/NoCodeList';
import AddCodeBtn from '../components/AddCodeBtn';
import Filters from '../components/Filters';

import { HomeStyle } from '../styles';

class Home extends React.Component {
  render() {
    const { filteredCodeList } = this.props;
    return (
      <HomeStyle>
        <header>
          <h1>Código Penal</h1>
          <Filters />
        </header>
        <main>
          {
            filteredCodeList.length <= 0
              ? <NoCodeList />
              : <PenalCodeTable />
          }
          <AddCodeBtn />
        </main>
      </HomeStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredCodeList: state.data.codigoPenalFiltrado,
});

Home.propTypes = {
  filteredCodeList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(Home);
