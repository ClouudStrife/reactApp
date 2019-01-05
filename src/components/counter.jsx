import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count: 0
    };  //Inclui todos os dados que esse component irá precisar

    render(){
        return (
        <div className="container-fluid text-center" style = {{ padding: '1.5rem' }}>
            <button className="btn btn-primary" style = {{ margin: '10px'}}> Increment </button>
            <span> { this.formatCount() } </span>    
        </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        if (count === 0)
            return 'Zero';
        else
            return count;
    }
}

export default Counter;