import React, { useState } from 'react';
import NewsCard from './NewsCard'
import newsData from './newsData'
import NewsDetail from './NewsDetail';
export default function NewsBody(props) {
    const [readObj, setReadObj] = useState({});
    const filteredObjects = newsData.filter(items => items.category.includes(props.newsCategory))
    const modifiedCategory = (val)=>{
            if ( val.category.indexOf(props.newsCategory)!== 0 ) {
                return `${props.newsCategory}, ${val.category.filter(item => item !== props.newsCategory).join(", ")}`
            }
            else {
                return props.newsCategory
            }
    }
    const handleReadMore = (evt,i) => {
        setReadObj(newsData[i])
    };
    const handleDismiss = () => {
      setReadObj({})
    };
    
    
    return(
        <>
            <div className='row' style={{width : "100%", margin : "auto", marginTop : "20px"}}>
                { props.newsCategory === "" ?
                    Array.isArray(newsData) && newsData.map(
                        (val, i) => (
                            <NewsCard
                                key = {i}
                                index = {i}
                                newsHeadline = {val.headline}
                                newsDetail = {val.details}
                                newsCategory = {val.category.join(", ")}
                                mode = {props.mode}
                                handleReadMore = {handleReadMore}
                            /> 
                        ))
                    : Array.isArray(filteredObjects) && filteredObjects.map(
                        (val, i) => (
                            <NewsCard
                                key = {i}
                                index = {newsData.indexOf(val)}
                                newsHeadline = {val.headline}
                                newsDetail = {val.details}
                                newsCategory = {modifiedCategory(val)}
                                mode = {props.mode}
                                handleReadMore = {handleReadMore}
                            /> 
                        )
                )}
            </div>
            { // use readObj.length instead of showNewsDetail
                Object.keys(readObj).length && <NewsDetail readObj={readObj} handleDismiss={handleDismiss} mode={props.mode}/>
            }
        </>
    )
}