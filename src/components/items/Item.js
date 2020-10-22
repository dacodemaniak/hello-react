import React from 'react'

const Item = (props) => {
    const { item, onUpdate } = props

    const handleSubmit = (event) => {
        // Prevent default action => form submission
        event.preventDefault()
        item.viewed = true
        console.log('My logic can be handled here')
        onUpdate(item)
    }
    return (
        <div className="item">
            <h2>
                { item.title }
            </h2>
            <form onSubmit={handleSubmit}>
                <button type="submit" disabled={item.viewed}>
                    {item.viewed ? 'Viewed' : 'Check'}
                </button>
            </form>
        </div>
    )
}

export default Item