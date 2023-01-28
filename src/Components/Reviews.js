import React, { Component } from 'react';
import Table from "./ReviewList";
import Form from "./ReviewForm";

class Review extends Component {
    state = {
      characters: []
    };
  
    removeCharacter = index => {
      const { characters } = this.state;
  
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index;
        })
      });
    };
  
    handleSubmit = char => {
      this.setState({ characters: [...this.state.characters, char] });
    };
    render() {
      const { characters } = this.state;
      return (
        <div className="container">
          <Form handleSubmit={this.handleSubmit} />
          <br></br>
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      );
    }
  }
  
  export default Review;