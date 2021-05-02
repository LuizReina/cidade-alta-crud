import React from 'react';
import loading from '../imgs/loading.gif';

import { Img } from '../styles';

class Loading extends React.Component {
  render() {
    return (
      <Img src={ loading } alt="loading symbol" />
    );
  }
}

export default Loading;
