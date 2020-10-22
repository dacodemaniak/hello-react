import React from 'react'
import Item from './Item'
const Items = (props) => {
    const { items } = props

    const asList = () => {
        return (
                <div>
                    {items.map(item => {
                        // You logic here...
                        return <Item key={item.id} item={item} />
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