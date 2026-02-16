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
    this.setState({ progress });
  };

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery });
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
            path="/"
            element={
              <News
                searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
                category="general"
                pageSize={6}
              />
            }
          />

          <Route
            path="/business"
            element={
              <News
                key="business"
                searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
                category="business"
                pageSize={6}
              />
            }
          />

          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
                category="entertainment"
                pageSize={6}
              />
            }
          />

          <Route
            path="/health"
            element={
              <News
                key="health"
                searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
                category="health"
                pageSize={6}
              />
            }
          />

          <Route
            path="/science"
            element={
              <News
                key="science"
                searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
                category="science"
                pageSize={6}
              />
            }
          />

          <Route
            path="/sports"
            element={
              <News
                key="sports"
                searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
                category="sports"
                pageSize={6}
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                key="technology"
                searchQuery={this.state.searchQuery}
                setProgress={this.setProgress}
                country="us"
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
