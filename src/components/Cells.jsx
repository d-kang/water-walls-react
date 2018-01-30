import React from 'react';

const Cells = ({ subArr }) => {
  return (
    subArr.map((block, k) => {
      const color = block === 0 ? 'white'
        : block === 1 ? 'grey'
        : block === 2 ? 'cyan'
        : 'black';
      return (
        <div className={`cell ${color}`} key={k}></div>
      )
    })
  )
}

export default Cells;
