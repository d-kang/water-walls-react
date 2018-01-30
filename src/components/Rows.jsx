import React from 'react';
import Cells from './Cells';

const Rows = ({ blocks }) => (
  blocks.map((subArr, i) =>
    <div className='row' key={i}>
      <Cells subArr={subArr} />
    </div>
  )
);


export default Rows;
