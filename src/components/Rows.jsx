import React from 'react';
import Cells from './Cells';

const Rows = ({ blocks }) => {
  return (
    blocks.map((subArr, i) => {
      return (
        <div className='row' key={i}>{
          <Cells subArr={subArr} />
        }</div>
      )
    })
  )
}

export default Rows;
