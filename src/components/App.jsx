import React, { PureComponent } from 'react';
import '../assets/App.css';

import { blocks } from '../data/data';

class App extends PureComponent {
  state = {
    blocks: [],
  }

  componentDidMount() {
    const url = 'http://localhost:1234/api/waterBlocks';
    const data = {
      method: 'POST',
      body: JSON.stringify([1, 4, 5, 3, 6]),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    fetch(url, data)
      .then(res => res.json())
      .then(res => (console.log('res>>>', res), res))
      .then(res => (this.setState({ blocks }), res))
      .catch(console.error);
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
