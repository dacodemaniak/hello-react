import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

const Item = (props) => {
    const { item, onUpdate } = props
    const [updatedItem, setUpdatedItem] = useState({})
    const [userRating, setUserRating] = useState(5)

    const handleSubmit = (event) => {
        // Prevent default action => form submission
        event.preventDefault()
        item.viewed = true
        setUpdatedItem(item)
        console.log('Update current state of item')
        onUpdate(item)
    }

    const handleNote = (note) => {
        console.log(`Note was updated with : ${note}`)
        item.rating = note
        setUpdatedItem(item) // Need to update
        onUpdate(item)
        setUserRating(note)
    }

    const ratingComponent = <ReactStars
        value={item.rating}
        count={5}
        activeColor="#ffd770"
        onChange={(note) => handleNote(note)}
        edit={!item.viewed}
    />

    return (
        <div className="item">
            <h2>
                { item.title } [{item.rating}]
            </h2>
            <form onSubmit={handleSubmit}>
                { ratingComponent }
                <button type="submit" disabled={item.viewed}>
                    { item.viewed ? 'Viewed' : 'Check'}
                </button>
            </form>
        </div>
    )
}

export default Item