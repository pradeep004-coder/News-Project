import React from 'react'

function NewsDetail(props) {
  return (
    <div className='w-100 h-100 position-fixed d-flex flex-column justify-content-center bg-dark bg-opacity-75 z-9999' onClick={props.handleDismiss}>
        <button type='button' className="btn border border-secondary text-secondary bg-transparent m-4 ms-auto fs-1 fw-bold">x</button>
        <div className="card m-auto mt-0 p-4" style={ props.mode === 'Dark' ? { backgroundColor : '#666', color : 'white', maxWidth : '90%'} : {maxWidth : '90%'}} onClick={evt => evt.stopPropagation()}>
                <div className="bg-secondary d-flex justify-content-center align-items-center m-auto" style={{width : "50vh", height : "50vh", maxWidth : '100%'}}>
                    <span className="text-white fw-bold" style={{transform : "rotate(-35deg)"}}>Image</span>
                </div>
            <div className="card-body">
                <h3 className="card-title fs-1 fw-bold">{props.readObj.headline}</h3>
                <p className="card-text fs-3" >{props.readObj.details}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsDetail