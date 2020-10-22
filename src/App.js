import React, { useEffect, useState } from 'react'
import Items from './components/items/Items'
import Toolbar from './components/toolbar/Toolbar'

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
      viewed: false,
      rating: 2
    },
    {
      id: 3,
      title: 'Props',
      viewed: false,
      rating: 0
    }
  ]

  // Set initial state of App component (grand father)
  const [items, setItems] = useState(dataArray)

  // Callback from Items : datas updated
  const updateData = (receivedItems) => {
    console.log(`Updated list : ${JSON.stringify(receivedItems)}`)
    setItems([...receivedItems])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Mark as done
        </h1>
        <Toolbar items={items} />
      </header>

      <Items items={items} onUpdate={updateData} />

    </div>
  );
}

export default App;
