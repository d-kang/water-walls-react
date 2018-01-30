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
    const myBlocks = this.state.blocks.map((subArr, i) => {
      return (
        <div className='row' key={i}>{
          subArr.map((block, k) => {
            const color = block === 0 ? 'white'
              : block === 1 ? 'grey'
              : block === 2 ? 'cyan'
              : 'black';
            return (
              <div className={`cell ${color}`} key={k}></div>
            )
          })
        }</div>
      )
    });
    return (
      <div className='App'>
        <div className='grid'>
          {myBlocks}
        </div>
      </div>
    )
  }
}

export default App;
