import React, {Component} from "react";

class ClassBaseComponent extends  Component{
    render(){
        return(
            <div>
                <p>This is calling from {this.props.attr}</p>
            </div>
        )
    }
}

export default ClassBaseComponent;

// Note :
// class base component attribute value is kept track with this key work like this.props.attribute
// this key word is used in functional component
