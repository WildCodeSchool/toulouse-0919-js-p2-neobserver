import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchedNeo: ' ', filteredNeo: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchedNeo: event.target.value });
  }

  handleClick(event) {}

  render() {
    return (
      <div>
        <label htmlFor="searchedNeo">Name :</label>
        <input
          id="searchedNeo"
          type="text"
          value={this.state.searchedNeo}
          onChange={this.handleChange}
        />
        <button onClick={this.state.handleClick}>SEARCH</button>
      </div>
    );
  }
}

export default Input;
