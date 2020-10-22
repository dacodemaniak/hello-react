import React from 'react'
import Item from './Item'
const Items = (props) => {
    const { items, onUpdate } = props
    
    // Sets a callback function
    const submitCallback = (item) => {
        console.log(`Received ${JSON.stringify(item)}`)
        // Replace the brand updated item in the items array
        const index = items.find((obj) => obj.id === item.id)
        items[index] = item // The one i got back
        onUpdate(items)
    }

    const asList = () => {
        return (
                <div>
                    {items.map(item => {
                        // You logic here...
                        return <Item 
                            key={item.id} 
                            item={item}
                            onUpdate={submitCallback} />
                    })}
                </div>
        )
    }



    return (
        <div>
            {/* Use asList function to list all items */}
            {asList()}
        </div>
    )
}

export default Items