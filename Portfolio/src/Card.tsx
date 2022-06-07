import React from 'react';
import './Card.css'

type CardProps = {
    name: string,
    description: string | null,
    imgsrc: string,
    link: string,
}

class Card extends React.Component<CardProps> {
    render() {
        return (
            <div className="Card">
                <img src={this.props.imgsrc} alt="temp" />
                <div className="Card-container">
                    <a target="_blank" rel="noreferrer" href={this.props.link}>
                        <h4><b>{this.props.name}</b></h4>
                    </a>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

/* state example
<button onClick={() => this.setState((state) => ({ count: state.count + 1,}))}>
                    Click!
</button> */

export default Card