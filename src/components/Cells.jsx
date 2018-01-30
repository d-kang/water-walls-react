import React from 'react';

const colorFinder = num => (
  num === 0 ? 'white'
    : num === 1 ? 'grey'
    : num === 2 ? 'cyan'
    : 'black'
)


const Cells = ({ subArr }) => (
  subArr.map((block, k) => (
    <div className={`cell ${colorFinder(block)}`} key={k}></div>
  ))
)

export default Cells;
