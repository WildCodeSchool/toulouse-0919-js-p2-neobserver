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
      .get(this.props.link)
      .then(response => response.data)
      .then(data => {
        this.setState({
          News: data
        });
      });
  }

  render() {
    return (
      <div className="NewsPage">{this.state.News ? <DisplayNews News={this.state.News} /> : null}</div>
    );
  }
}

News.defaultProps = {
  link: 'https://api.nasa.gov/planetary/apod?api_key=eGfzJvpaKcTknvBgnNdkYu5RoPxpKSKVUjlqU8ag'
};

export default News;
