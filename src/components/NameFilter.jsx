import React from 'react';
import DisplayCardNeoOTD from './DisplayCardNeoOTD';
import arrNeo from './jason';

class NameFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedName: '',
      nameResult: null,
      foundNeo: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.findNeoByName = this.findNeoByName.bind(this);
  }

  findNeoByName(neoName) {
    const resultNeo = arrNeo.find(neo => {
      return neo.name === neoName;
    });
    this.setState({ foundNeo: resultNeo });
  }

  handleChange(event) {
    this.setState({ searchedName: event.target.value });
  }

  handleSearch() {
    this.setState({ nameResult: this.state.searchedName });
  }

  render() {
    return (
      <div>
        <label htmlFor="name"> Name :</label>
        <input
          onChange={this.handleChange}
          id="searchName"
          type="text"
          value={this.state.searchedName}
        />
        <button onClick={() => this.findNeoByName(this.state.searchedName)}>SEARCH</button>
        {this.state.foundNeo && <DisplayCardNeoOTD neo={this.state.foundNeo} />}
      </div>
    );
  }
}

export default NameFilter;
