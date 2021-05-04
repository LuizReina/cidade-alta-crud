/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PenalCodeTable from '../components/PenalCodeTable';
import NoCodeList from '../components/NoCodeList';
import AddCodeBtn from '../components/AddCodeBtn';
import Filters from '../components/Filters';

import { HomeStyle } from '../styles/stylesHome';

const NUMBER_OF_RESULTS_PER_PAGE = 10;

class Home extends React.Component {
  render() {
    const { filteredCodeList } = this.props;
    return (
      <HomeStyle>
        <header>
          <h1>Código Penal</h1>
          <Filters resultsPerPage={ NUMBER_OF_RESULTS_PER_PAGE } />
        </header>
        <main>
          {
            filteredCodeList.length <= 0
              ? <NoCodeList />
              : <PenalCodeTable resultsPerPage={ NUMBER_OF_RESULTS_PER_PAGE } />
          }
        </main>
        <footer>
          <AddCodeBtn />
        </footer>
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
