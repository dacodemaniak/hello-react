import React, {useState} from 'react'

const Toolbar = (props) => {
    const { items } = props

    const stats = () => {
        const viewed = items.filter(
            (obj) => {
                return obj.viewed === true
            }
        )
        return {
            total: items.length,
            viewed: viewed.length,
            remaining: items.length - viewed.length
        }
    }

    const results = stats()

    return (
        <div className="toolbar">
            <ul>
                <li>Items # : {results.total} </li>
                <li>Viewed # : {results.viewed}</li>
                <li>Remaining # : {results.remaining}</li>
            </ul>
        </div>
    )
}

export default Toolbar