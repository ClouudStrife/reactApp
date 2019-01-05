import React, { Component } from 'react';
import Hero from './hero';

class Heroes extends Component {
    state={
        heroes:[
            {
                name:'Aquaman',
                power:'Talk to Fish'
            },
            {
                name:'Batman',
                power:'Be Rich'
            },
            {
                name:'Superman',
                power:'Wear your underwear over your pants'
            }
        ]
    }

    insertHero = () =>{
        const hero = {
            name: document.getElementById("name").value,
            power: document.getElementById("power").value,
        }
        
        this.setState({ heroes: [...this.state.heroes, hero]});
        
    };

    render(){
        return (
            <div className="container-fluid text-center">
                <h1 className="display-4"> List of Best Heroes </h1>
                <hr/>
                <h3 className="display-7"> Name and Power </h3>
                <ul>
                    { this.state.heroes.map( hero => <Hero key={ hero.name } name={ hero.name } power={ hero.power }/>)}
                </ul>
                <br/>
                <hr/>
                <br/>
                <h3 className="display-5"> Add a new Hero </h3>
                <p> Name: <input id="name"/> </p>
                <p> Power: <input id="power"/> </p>
                <button onClick={ this.insertHero } className="btn btn-primary"> Add </button>  
            </div>
        )
    }
}

export default Heroes;