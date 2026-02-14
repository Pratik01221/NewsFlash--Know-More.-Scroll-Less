import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
    searchQuery: "",

  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery: searchQuery });
  };

  

  
  render() {
    return (
      <Router>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setState({ progress: 0 })}
        />

        <Navbar setSearchQuery={this.setSearchQuery} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
              searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
                apiKey="dc7782e7084748928e912fb25791f3e2"
                category="general"
                pageSize={6}
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
              searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                key="business"
                country="us"
                apiKey="dc7782e7084748928e912fb25791f3e2"
                category="business"
                pageSize={6}
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
              searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                key="entertainment"
                country="us"
                apiKey="dc7782e7084748928e912fb25791f3e2"
                category="entertainment"
                pageSize={6}
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
              searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                key="health"
                country="us"
                apiKey="dc7782e7084748928e912fb25791f3e2"
                category="health"
                pageSize={6}
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
              searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                key="science"
                country="us"
                apiKey="dc7782e7084748928e912fb25791f3e2"
                category="science"
                pageSize={6}
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
              searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                key="sports"
                country="us"
                apiKey="dc7782e7084748928e912fb25791f3e2"
                category="sports"
                pageSize={6}
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
              searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                key="technology"
                country="us"
                apiKey="dc7782e7084748928e912fb25791f3e2"
                category="technology"
                pageSize={6}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
