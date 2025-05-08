import React from 'react';

export default function NewsCard ({mode, newsObj, newsCategory, handleReadMore, index}) {
    return(
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-2 mb-4">
                <div id='newsCard' className="card" style={{ backgroundColor : (mode === "Light" ? "#fff" : "#666")}}>
                    <div id='newsCardimgPlaceholder' className="h-50 bg-secondary d-flex justify-content-center align-items-center" style={{height : "100px"}}>
                        <span className="text-white fw-bold" style={{}}>Image</span>
                    </div>
                    <div className="card-body">
                        <div className={`card-title text-${mode === "Light" ? "dark" : "white"}`}>
                            <h4 id='newsCardHeading'>{newsObj.headline}</h4>
                        </div>
                        <div id='newsDescription' className={`card-text ${mode === 'Dark' ? 'text-light' : 'dark'}`}>{newsObj.details}</div>
                        <div className=" mt-4 d-flex  justify-content-between">
                            <div className='my-auto fs-5'>
                                <small id='newsCardCategory' className='my-auto fst-italic text-truncate '>{newsCategory}</small>
                            </div>
                            <button
                                id='readMoreButton'
                                className={`btn btn-${mode === "Light" ? "dark" : "primary"} text-white fs-5`}
                                type="button"
                                onClick={evt => handleReadMore(evt, index)}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )                                      
}