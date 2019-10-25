import React from 'react';
import axios from 'axios';
import DisplayNews from './DisplayNews';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      News: null
    };
    this.getNews = this.getNews.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=eGfzJvpaKcTknvBgnNdkYu5RoPxpKSKVUjlqU8ag')
      .then(response => response.data)
      .then(data => {
        this.setState({
          News: data
        });
      });
  }

  render() {
    console.log(this.state.news);
    return (
      <div className="app">{this.state.News ? <DisplayNews News={this.state.News} /> : null}</div>
    );
  }
}
export default News;
