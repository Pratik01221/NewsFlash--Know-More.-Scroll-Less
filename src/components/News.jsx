import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 15,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };

    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - NEWSFLASH`;
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  fetchMoreData = async () => {

    const nextPage = this.state.page + 1;

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: nextPage,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
     
    });
  };

  render() {
    return (
    <> 
        <h2 className="text-center mb-6">
          📰 Top News Headlines From{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
        </h2>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
            <div className="container"> 
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem
                  title={
                    element.title ? element.title.slice(0, 45) + "..." : ""
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88) + "..."
                      : ""
                  }
                  imageurl={
                    element.urlToImage ||
                    "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
                  }
                  newsURL={element.url}
                  author={element.author || "Unknown"}
                  publishedAt={new Date(element.publishedAt).toGMTString()}
                  source={element.source.name}
                />
              </div>
              
            ))}
            </div>
          </div>
        </InfiniteScroll>

        {/* Optional Page Counter */}
        <div className="text-center mt-4 fw-semibold">
          Page {this.state.page} of{" "}
          {Math.ceil(this.state.totalResults / this.props.pageSize)}
        </div>
 </>
    );
  }
}

export default News;
