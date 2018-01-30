import React, { PureComponent } from 'react';
import '../assets/App.css';

import Form from './Form';
// import { blocks } from '../data/data';

class App extends PureComponent {
  state = {
    blocks: [],
  }

  postData = (payload) => {


    const url = 'http://localhost:1234/api/waterBlocks';
    const data = {
      method: 'POST',
      body: JSON.stringify({ payload }),
      headers: new Headers({
        'Content-Type': 'application/JSON'
      })
    }
    fetch(url, data)
      .then(res => res.json())
      .then(res => (console.log('res>>>', res), res))
      .then(({ blocks }) => (this.setState({ blocks }), res))
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
        <h1>Welcome To WaterBlocks</h1>
        <Form postData={this.postData} />
        <div className='grid'>
          {myBlocks}
        </div>
      </div>
    )
  }
}

export default App;
