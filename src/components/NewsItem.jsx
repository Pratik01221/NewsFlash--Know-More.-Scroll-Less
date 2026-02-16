import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageurl,
      newsURL,
      author,
      publishedAt,
      source,
      category= "general",
    } = this.props;

    return (
      <div className="card my-4 h-80 position-relative">
        <span
          className="badge bg-danger rounded-pill position-absolute"
          style={{ top: "10px", right: "10px", zIndex: 1 }}
        >
          {source || "Unknown"}
          {category && (
            <span className="ms-2">{category}</span>
          )}
        </span>

        <img
          src={
            imageurl && imageurl !== "null"
              ? imageurl
              : "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
          }
          className="card-img-top"
          alt="news"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {title ? title.slice(0, 70) : "No Title Available"}
          </h5>

          <p className="card-text">
            {description
              ? description.slice(0, 120)
              : "No description available."}
          </p>

          <p className="card-text mt-auto">
            <small className="text-muted">
              By {author || "Unknown"} on{" "}
              {publishedAt
                ? new Date(publishedAt).toGMTString()
                : "Unknown date"}
            </small>
          </p>

          {newsURL && (
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-sm mt-2"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default NewsItem;
