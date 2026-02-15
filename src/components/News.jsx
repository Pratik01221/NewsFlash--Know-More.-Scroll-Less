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
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1)
    } - NEWSFLASH`;
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ page: 1, articles: [] }, this.fetchNews);
    }
  }

fetchNews = async () => {
  try {
    const apiKey = import.meta.env.VITE_GNEWS_API;
    
    this.setState({ loading: true });
    this.props.setProgress(20);

    let url;
    if (this.props.searchQuery && this.props.searchQuery.trim() !== "") {
      url = `https://gnews.io/api/v4/search?q=${this.props.searchQuery}&lang=en&max=${this.props.pageSize}&page=1&apikey=${apiKey}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&category=${this.props.category}&max=${this.props.pageSize}&page=1&apikey=${apiKey}`;
    }

    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalArticles || 0,
      loading: false,
      page: 1,
    });

    this.props.setProgress(100);
  } catch (error) {
    console.error(error);
    this.setState({ loading: false });
    this.props.setProgress(100);
  }
};


fetchMoreData = async () => {
  const apiKey = import.meta.env.VITE_GNEWS_API;
  const nextPage = this.state.page + 1;

  let url;
  if (this.props.searchQuery && this.props.searchQuery.trim() !== "") {
    url = `https://gnews.io/api/v4/search?q=${this.props.searchQuery}&lang=en&max=${this.props.pageSize}&page=${nextPage}&apikey=${apiKey}`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&category=${this.props.category}&max=${this.props.pageSize}&page=${nextPage}&apikey=${apiKey}`;
  }

  const data = await fetch(url);
  const parsedData = await data.json();

  this.setState({
    page: nextPage,
    articles: this.state.articles.concat(parsedData.articles || []),
    totalResults:
      parsedData.totalArticles || this.state.totalResults,
  });
};


  render() {
    return (
      <>
        <h2 className="text-center mb-4">
          📰 Top News Headlines From{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
        </h2>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.articles.length < this.state.totalResults
          }
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4 mb-4" key={element.url}>
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 45) + "..."
                        : ""
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
                    publishedAt={new Date(
                      element.publishedAt
                    ).toGMTString()}
                    source={element.source?.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>

        <div className="text-center mt-4 fw-semibold">
          Page {this.state.page} of{" "}
          {Math.ceil(
            (this.state.totalResults || 0) /
              this.props.pageSize
          )}
        </div>
      </>
    );
  }
}

export default News;
