import React, { PureComponent } from 'react';
import '../assets/App.css';

import Form from './Form';
import Rows from './Rows';
import { getBlocks } from '../actions';

class App extends PureComponent {
  state = {
    blocks: [],
  }

  postData = payload => {
    getBlocks(payload)
      .then(({ blocks }) => (this.setState({ blocks }), res))
      .catch(console.error);
  }
  render() {

    return (
      <div className='App'>
        <h1>Welcome To WaterBlocks</h1>
        <Form postData={this.postData} />
        <div className='grid'>
          <Rows blocks={this.state.blocks} />
        </div>
      </div>
    )
  }
}

export default App;
