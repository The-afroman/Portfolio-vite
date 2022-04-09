import React from 'react';
/*
    card 
*/
class Card extends React.Component<{ name: string}, {count: number }> {
    state = {count: 0}
    render() {
        return(
            <div>
                <p>{this.props.name} {this.state.count}</p>
                <button onClick={() => this.setState((state) => ({ count: state.count + 1,}))}>
                    Click!
                </button>
            </div>
        );
    }
}

export default Card