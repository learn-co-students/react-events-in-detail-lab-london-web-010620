import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render(props) {
        return (
            <div>
                <button onClick={(e) => {
                    setTimeout(() => {
                        e.persist()
                        this.props.onDelayedClick(e)
                    }, this.props.delay
                    );
                }
                }></button>
            </div>
        )
    }
}
