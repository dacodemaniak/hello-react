import React from 'react'

class Hello extends React.Component {

    render() {
        const { who } = this.props
        const whoFromProps = this.props.who
        
        return (
            <div>
                <p>Hello {who}</p>
            </div>
        )
    }
}

export default Hello