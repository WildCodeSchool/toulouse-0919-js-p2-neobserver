import moment from 'moment';
import React from 'react';
import News from './News';

function generateDate() {
  // let date = this.state.date
  const newArrayDate = [];
  for (let i = 0; i < 6; i++) {
    const previousDay = moment().subtract(i, 'days');
    const formatDate = previousDay.format('YYYY-MM-DD');
    newArrayDate.push(formatDate);
  }
  return newArrayDate;
}

// formater la date pour que ce soit au format Y/M/D
// let date = moment().format()
function generateLinkArray(newArrayDate) {
  const arrlink = [];
  for (let i = 0; i < newArrayDate.length; i++) {
    const dateLink = `https://api.nasa.gov/planetary/apod?date=${newArrayDate[i]}&api_key=5PUzyQ2goY53k5caFiDoLmxGvYSoM9bxbnd7wgvG`;
    arrlink.push(dateLink);
  }
  return arrlink;
}

class FormatDateApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  render() {
    const dates = generateDate();
    const linksResult = generateLinkArray(dates);
    return (
      <div className="FormatDateApi">
        {linksResult.map(link => (
          <News link={link} />
        ))}
      </div>
    );
  }
}

export default FormatDateApi;
