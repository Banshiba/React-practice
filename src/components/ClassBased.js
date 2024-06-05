import React from 'react'

class ClassBased extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonContent: 'login',
        }
    }
    render() {
        const { name } = this.props
        const { buttonContent } = this.state
        return (
            <div>
                <h1>{name}</h1>
                <button onClick={() => this.setState({
                    buttonContent: this.state.buttonContent === "login" ? "logout" : "login"
                })}>{buttonContent}</button>
            </div>
        )
    }
}

export default ClassBased