import React from 'react';
import axios from 'axios';
import NewsPAge from './NewsPage';
import moment from 'moment';

class FormatDateApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  generateDate() {
    // let date = this.state.date
    let newArrayDate = [];
    for (let i = 0; i < 6; i++) {
      let previousDay = moment().subtract(i, 'days');
      let formatDate = previousDay.format('YYYY-MM-DD');
      newArrayDate.push(formatDate);
    }
    return newArrayDate;
  }
  //formater la date pour que ce soit au format Y/M/D
  // let date = moment().format()

  render() {
    const dates = this.generateDate();
    dates.map();
    console.log(this.state.date);
    return (
      <div className="FormatDateApi">
        {this.state.date ? <NewsPAge date={this.state.date} /> : null}
      </div>
    );
  }
}

export default FormatDateApi;

// url : https://api.nasa.gov/planetary/apod?date=2019-10-10&api_key=DEMO_KEY
