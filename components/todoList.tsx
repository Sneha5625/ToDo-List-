import * as React from 'react';
import { MdOutlineSaveAlt } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

export default function Todo({ lists, changeItem, onDelete }) {
  return (
    <div className="list">
      {lists.map((list) => (
        <div>
          <li>
            <List lists={list} changeItem={changeItem} onDelete={onDelete} />
          </li>
        </div>
      ))}
    </div>
  );
}

function List({ lists, changeItem, onDelete }) {
  const [editing, setEditing] = React.useState(false);

  let content;
  if (editing) {
    content = (
      <div className="change">
        <input
          value={lists.name}
          onChange={(e) =>
            changeItem({
              name: e.target.value,
              id: lists.id,
            })
          }
        ></input>
        <button onClick={() => setEditing(false)}>
          <MdOutlineSaveAlt />
        </button>
      </div>
    );
  } else {
    content = (
      <div classname="change1">
        {lists.name}
        <button
          onClick={() => {
            setEditing(true);
          }}
        >
          <BiEdit />
        </button>
      </div>
    );
  }
  return (
    <div className="content">
      {content}
      <div className="btn">
        <button onClick={() => onDelete(lists.id)}>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}
