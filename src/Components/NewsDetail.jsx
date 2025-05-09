import React from 'react'

function NewsDetail({handleDismiss, mode, readObj}) {
  return (
    <div  id='newsDetailPage' className='w-100 h-100 position-fixed top-0 start-0 d-flex flex-column justify-content-center bg-dark bg-opacity-75' onClick={handleDismiss}>
        <button type='button' className="btn border border-secondary text-secondary bg-transparent m-4 ms-auto mb-0 fs-1 fw-bold">x</button>
        <div id='newsDetailCard' className="card w-md-75 m-auto mt-0" style={ mode === 'Dark' ? { backgroundColor : '#666', color : 'white'} : {}} onClick={evt => evt.stopPropagation()}>
                <div id='newDetailImgPlaceholder' className="bg-secondary d-flex justify-content-center align-items-center m-auto">
                    <span className="text-white fw-bold">Image</span>
                </div>
            <div className="card-body">
                <h3 className="card-title fs-1 fw-bold">{readObj.headline}</h3>
                <p className="card-text fs-3" >{readObj.details}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsDetail