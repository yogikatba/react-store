import React from 'react';
import Item from './Item';

export default function List({ value }) {
  const { cart } = value;
  return (
    <div className='container-fluid'>
      {cart.map((item) => {
        return <Item key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
