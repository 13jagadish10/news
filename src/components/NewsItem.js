import React from 'react'

const NewsItem =(props)=> {

        let {title, desc, imgurl, author, date, source, newsurl} = props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img className="card-img-top" src={imgurl?imgurl:"https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/TOPSHOT-ISRAEL-PALESTINIAN-CONFLICT-HOSTAGES-0_1702730790422_1702730846062.jpg"} alt="Card image cap" />
                {/* <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' style={{color:"white"}}>{source}</span>  */}
                <span className='badge rounded-pill bg-danger' style={{color:"white"}}>{source}</span> 
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"}, on {new Date(date).toGMTString()}.</small></p>
                        <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-dark btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )

}

export default NewsItem