import * as React from 'react';
import { useStyletron } from 'baseui';
import '../style.css';

import { Input } from 'baseui/input';
import { styled } from 'styletron-react';

export default function AddItem({ onAdd }) {
  const [value, setValue] = React.useState('');

  return (
    <div className="Add">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Add ToDo"
      ></input>
      <button
        onClick={() => {
          onAdd(value);
        }}
      >
        {' '}
        +
      </button>
    </div>
  );
}
