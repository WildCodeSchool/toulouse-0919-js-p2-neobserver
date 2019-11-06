import React, { Component } from 'react';

function getEndDate(startDate) {
  const copy = new Date(startDate);
  copy.setDate(copy.getDate() + 7);
  return copy.toISOString().substring(0, 10);
}

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ arrDate: [event.target.value, getEndDate(event.target.value)] });
  }

  render() {
    const { arrDate } = this.state;
    return (
      <div>
        <input type="date" value={arrDate ? arrDate[0] : ''} onChange={this.handleChange} />
        <input type="date" value={arrDate ? arrDate[1] : ''} disabled />
      </div>
    );
  }
}

export default Datepicker;
