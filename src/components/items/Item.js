import React from 'react'

const Item = (props) => {
    const { item } = props

    return (
        <div className="item">
            <h2>
                { item.title }
            </h2>
            <form>
                <button type="submit" disabled={item.viewed}>
                    {item.viewed ? 'Viewed' : 'Check'}
                </button>
            </form>
        </div>
    )
}

export default Item