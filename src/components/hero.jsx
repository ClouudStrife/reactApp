import React, { Component } from 'react';

class Hero extends Component {
    state={}
    render(){
        return (
            <div className='text-center'>
                <h4> { this.props.name }  <small> { this.props.power } </small></h4>
            </div>
        )
    }
}

export default Hero;