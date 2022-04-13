import React from 'react';
import './Card.css'
/*
    props: 
    name, githubUrl,
    description, projectDate, 
*/
class Card extends React.Component<{ name: string, description: string | null, imgsrc: string, link: string }> {
    render() {
        return(
            <div className="Card" onClick={() => window.open(this.props.link, "_blank")}>
                <img src={this.props.imgsrc} alt="temp"/>
                <div className="Card-container">
                    <h4><b>{this.props.name}</b></h4>
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