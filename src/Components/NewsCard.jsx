import React from 'react';

export default function NewsCard (props) {
    return(
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                <div className="card " style={{border : "1px solid", boxShadow : "8px 5px 5px"}}>
                    <div className="bg-secondary d-flex justify-content-center align-items-center" style={{height : "100px"}}>
                        <div className="text-white fw-bold" style={{transform : "rotate(-35deg)"}}>Image</div>
                    </div>
                    <div className="card-body" style={{backgroundColor : (props.mode === "Light" ? "#fff" : "#666")}}>
                        <div className={`card-title text-${props.mode === "Light" ? "dark" : "white"}`}>
                            <h4 style={{display : "-webkit-box", WebkitLineClamp : 2, WebkitBoxOrient : "vertical", overflow : "hidden"}}>{props.newsHeadline}</h4>
                        </div>
                        <div className={`card-text`} style={{color : props.mode === "Dark"?"#eee":"black", display : "-webkit-box", WebkitLineClamp : 3, WebkitBoxOrient : "vertical", overflow : "hidden"}}>{props.newsDetail}</div>
                        <div className=" mt-2 d-flex justify-content-between">
                            <div style={{ fontSize : "12px"}}>
                                <small className='fst-italic text-truncate '>{props.newsCategory}</small>
                            </div>
                            <button
                                type="button"
                                className={`btn btn-${props.mode === "Light" ? "dark" : "primary"}`}
                                style={{ fontSize: "12px", color: "white", textDecoration: "none" }}
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