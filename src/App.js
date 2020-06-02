import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import Lifecycles from './components/lifecycles/lifecycles.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      showField: true,
      text: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1> Meaw Cats </h1>
        <button
          onClick={() =>
            this.setState(state => ({
              showField: !this.state.showField
            }))
          }
          Toggle
        >
        </button>
        <button
          onClick={() =>
            this.setState(state => ({
              text: state.text + '_maaauuu'
            }))
          }
          Update text
        >
        </button>
        {this.state.showField ? <Lifecycles text={this.state.text} /> : null}
        <SearchBox
          placeholder='search mewsters'
          handleChange={(event) => this.handleChange(event)}
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
};


export default App;
