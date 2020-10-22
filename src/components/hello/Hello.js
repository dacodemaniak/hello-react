import React from 'react'
import './css/hello.css'

const Hello = (props) => {

    // Destructiring props
    const { courseParts } = props

    return (
        <div>
            <p className="button-label">{courseParts.title}</p>
            <button 
                type="button"
                disabled={courseParts.viewed}
            >
                {courseParts.viewed ? 'Viewed' : 'Mark'}
            </button>
        </div>
    )
}

export default Hello

/**
 * @angular <app-mycomponent [who]="jean-luc"></app-mycomponent>
 * // in child component
 * // @Input() private who: string
 */