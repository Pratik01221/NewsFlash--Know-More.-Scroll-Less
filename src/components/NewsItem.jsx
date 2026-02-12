import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsURL, author, publishedAt, source } = this.props;
        return (
            <div>
                <div className="card">

                    <img src={imageurl} className="card-img-top" alt="..." />
                    <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{ left: '90%', zIndex: '1' }}>
                        {source}
                    </span>
                    <div className="card-body">

                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} On {publishedAt}</small></p>
                        
                        <a href={newsURL} target='_blank' className="btn btn-success btn-sm">Read More</a>
                        
                        


                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem