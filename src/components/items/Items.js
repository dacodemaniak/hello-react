import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Items = (props) => {
    const { items, onUpdate } = props
    const [parentItems, setParentItems] = useState([])

    // Sets a callback function
    const submitCallback = (item) => {
        
        // Replace the brand updated item in the items array
        const index = items.find((obj) => obj.id === item.id)
        items[index] = item // The one i got back
        
        setParentItems(items)

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

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      viewed: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

export default Items