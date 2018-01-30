import React, { PureComponent } from 'react';
import '../assets/App.css';

import { blocks } from '../data/data';

class App extends PureComponent {
  state = {
    blocks: [],
  }

  componentDidMount() {
    this.setState({ blocks });
  }
  render() {
    console.log({ blocks })
    return (
      <div className='App'>
        <div className='wrapper'>
          <div className="white"></div>
          <div className="grey"></div>
          <div className="cyan"></div>
          <div className="black"></div>
        </div>
      </div>
    )
  }
}

export default App;
