import React from 'react';
import './App.css';
import Form from "./components/Form"
import Recipes from "./components/Recipes"


class App extends React.Component {
  state = {
    users: []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch("https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/photos");

    const data = await api_call.json()
    this.setState({users: data});
    console.log(this.state.users)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
          </header>
          <Form getRecipe={this.getRecipe}/>
          <Recipes users={this.state.users} />
        
      </div>
    );
  }
  
}

export default App;
