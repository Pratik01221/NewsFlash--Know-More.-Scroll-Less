import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsURL, author, publishedAt, source } =
            this.props;
        return (
            <div>
                <div className="card my-5">
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "absolute",
                                right: "0",
                            }}
                        >
                            <span className="bg-danger badge rounded-pill">{source}</span>
                        </div>
                    </div>
                    <img src={imageurl} className="card-img-top" alt="card..." />
                    <div className="card-header">

                    </div>

                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {author} On {publishedAt}
                            </small>
                        </p>

                        <a
                            href={newsURL}
                            target="_blank"
                            className="btn btn-success btn-sm"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
