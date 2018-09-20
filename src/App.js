import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [
      {
        'name': 'Chris',
        'job': 'Software Engineer'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }
      )
    }
    );
  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });

  }

  render() { 

    return (
      <div>
        <div className="App">
          <h1>Hello, React! From Chris</h1>
        </div>
        <div className="container">
          <Table
            characterData={this.state.characters}
            removeCharacter={this.removeCharacter}
          />
          <br/>
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>

    );
  }
}
export default App;