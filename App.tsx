import * as React from 'react';
import { useStyletron } from 'baseui';
import AddItem from './components/AddItem';
import Todo from './components/todoList';
import './style.css';
import { Block } from 'baseui/block';

let nextId = 0;
const Element = [];

export default function App() {
  const [lists, setLists] = React.useState(Element);

  function handleAddItem(value) {
    setLists([
      ...lists,
      {
        id: nextId++,
        name: value,
      },
    ]);
  }

  function handleEdit(item) {
    setLists(
      lists.map((list) => {
        if (list.id === item.id) {
          return {
            ...list,
            name: item.name,
          };
        } else {
          return list;
        }
      })
    );
  }

  function handleDelete(itemId) {
    setLists(lists.filter((list) => list.id !== itemId));
  }

  return (
    <div className="Main">
      <div className="Child">
        <h2>To do list by sneha</h2>
        <AddItem onAdd={handleAddItem} />
        <Todo lists={lists} changeItem={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
