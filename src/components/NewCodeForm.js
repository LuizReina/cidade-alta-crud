import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { } from '../actions';

class NewCodeForm extends React.Component {
  render() {
    const { codeList } = this.props;
    return (
      <div>
        <h3>Table</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  codeList: state.data.codigoPenal,
});

const mapDispatchToProps = (dispatch) => ({

});

NewCodeForm.propTypes = {
  codeList: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCodeForm);
