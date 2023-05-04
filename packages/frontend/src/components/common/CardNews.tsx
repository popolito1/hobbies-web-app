import React from 'react';

const CardNews = () => {
    return (
        <div className='card border border-warning bg-dark rounded' >
            <img src="./test.png" className="card-img-top"  alt="Test"/>
            <div className="card-body">
                <div className='d-flex flex-column align-items-start'>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <h5 className="card-title"><b>Card title</b></h5>
                    <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button className='btn btn-outline-warning mt-4'>Read Now</button>
            </div>
        </div>

    )
}

export default CardNews;