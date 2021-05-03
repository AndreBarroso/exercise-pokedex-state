import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.clickButton = this.clickButton.bind(this);
        this.pokemonsFiltreds = this.pokemonsFiltreds.bind(this);
        this.filterState = this.filterState.bind(this);
        
        this.state = {
          count: 0,
          type: 'Fire'
        };
      }

    pokemonsFiltreds(){
        return this.props.pokemons.filter((pokemon)=> {
            return pokemon.type === this.state.type;
        })
    }

    filterState({target}) {
        const { name } = target;
        this.setState((_estadoAnterior, _props) => ({
            type: name,
          }))
    }  
    
      clickButton() {
        this.pokemonsFiltreds()
        const length = this.pokemonsFiltreds().length;
       
        if (this.state.count < length -1){
        this.setState((estadoAnterior, _props) => ({
            count: estadoAnterior.count + 1,
          }))
        } else {
            this.setState((_estadoAnterior, _props) => ({
                count: 0,
              }))
        }
      }

    render() {
        return (
            <div>
                <div className="pokedex">
                {this.pokemonsFiltreds().map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)[this.state.count]}
                </div>
                <div>
                    <button onClick={this.clickButton}>Próximo Pokemon</button>
                    <button onClick={this.filterState} name="Fire">Fire</button>
                    <button onClick={this.filterState} name="Psychic">Psychic</button>
                    <button onClick={this.filterState} name="Electric">Electric</button>
                    <button onClick={this.filterState} name="Poison">Poison</button>
                    <button onClick={this.filterState} name="Normal">Normal</button>
                    <button onClick={this.filterState} name="Dragon">Dragon</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;