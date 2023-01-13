import { Component } from "react";

class Componentes extends Component {
    render() { 
        return (
        <>
            <h1>{this.props.lastName} {this.props.firstName}</h1>
            <p>Age: {this.props.Age}</p>
            <p>{this.props.haircolor}</p>
        </>
        );
    }
}
 
export default Componentes;