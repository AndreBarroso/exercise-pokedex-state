import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.clickButton = this.clickButton.bind(this);
        this.state = {
          count: 0,
        };
      }



      clickButton() {
        const length = this.props.pokemons.length;
       
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
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)[this.state.count]}
                </div>
                <div>
                    <button onClick={this.clickButton}>lalala</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;