import React from 'react'
import './css/hello.css'
    /**
     * Click handler triggered from onClick JSX attribute
     */
    let isClicked = true
    const clickEvent = () => {
        isClicked = !isClicked
        console.log(`isClicked => ${isClicked ? 'true' : 'false'}`)
    }

const HelloFunc = (props) => {
    const buttonTitle = 'Click sur moi'
    const buttonClicked = 'Tu as cliqué !'

    const { who, buttonStatus } = props
    const isDisabled = (buttonStatus === 'disabled')

    return (
        <div>
            <p className="button-label">Hello {who}</p>
            <button 
                type="button"
                onClick={clickEvent}
                disabled={isDisabled}
            >
                {isClicked ? buttonClicked : buttonTitle}
            </button>
        </div>
    )
}

export default HelloFunc

/**
 * @angular <app-mycomponent [who]="jean-luc"></app-mycomponent>
 * // in child component
 * // @Input() private who: string
 */