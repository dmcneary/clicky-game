import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/";
import Card from "./components/Card/";
import Jumbotron from "./components/Jumbotron/";
import charList from "./characters.json";

class App extends React.Component {

  state= {
    chosenChars: [],
    score: 0,
    topScore: 0,
    status: "Click an image to start",
    cyclistName: "",
    message: "Click on an image to earn points, but don't click on any more than once!"
  }

  handleCardGeneration = () => {
    let arrangement = [];
    while (arrangement.length < 12){
      var randomizer = Math.floor(Math.random()*charList.length)
      if(arrangement.indexOf(charList[randomizer]) === -1){
      arrangement.push(charList[randomizer])
      }
    }
    return arrangement.map(char => <Card key={char.key} name={char.name} image={char.image} onClick={this.handleClick} />);
  }

  handleClick = (char) => {
    this.handleCardGeneration();

    if (this.state.chosenChars.indexOf(char) === -1) {
      this.setState(
        {
        chosenChars: [...this.state.chosenChars, char],
        score: this.state.score + 1,
        status: "Good!"
        }
      )
    } else {
      //game over!
      if (this.state.topScore < this.state.score){
        //set top score if necessary
        this.setState(
          {
          topScore: this.state.score
          }
        )
      }
      
      //reset and try try again
      this.setState({
        status: "You already clicked that one! Try again?",
        score: 0,
        chosenChars: []
      })

    }
  }

  render(){
    return(
    <div className="container-fluid">
      <Navbar score={ this.state.score } status={ this.state.status } topScore={ this.state.topScore }/>
      <div class="wrapper">
        {this.handleCardGeneration()}
      </div>
      <Jumbotron cyclistName={ this.cyclistName } message={ this.message }/>
      <footer>by David McNeary</footer>
    </div>)
}

}
export default App;
