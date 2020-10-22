import React from 'react';
import Items from './components/items/Items'

import './App.css';

const App = () => {
  const dataArray = [
    {
      id: 1,
      title: 'ES6 discovering',
      viewed: true,
      rating: 5
    },
    {
      id: 2,
      title: 'Functional component',
      viewed: true,
      rating: 2
    },
    {
      id: 3,
      title: 'Props',
      viewed: false,
      rating: 0
    }
  ]

  // Callback from Items : datas updated
  const updateData = (items) => {
    console.log(`Updated list : ${JSON.stringify(items)}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Mark as done
        </h1>
      </header>

      <Items items={dataArray} onUpdate={updateData} />

    </div>
  );
}

export default App;
