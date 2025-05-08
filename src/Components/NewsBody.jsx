import React, { useState } from 'react';
import NewsCard from './NewsCard'
import newsData from './newsData'
import NewsDetail from './NewsDetail';
export default function NewsBody({newsCategory, mode}) {
    const [readObj, setReadObj] = useState({});
    const filteredObjects = newsData.filter(items => items.category.includes(newsCategory))
    const modifiedCategory = (val)=>{
            if ( val.category.indexOf(newsCategory)!== 0 ) {
                return `${newsCategory}, ${val.category.filter(item => item !== newsCategory).join(", ")}`
            }
            else {
                return newsCategory
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
            <div id='newsBody' className='row' style={{width : "100%", margin : "auto", marginTop : "20px"}}>
                { newsCategory === "" ?
                    Array.isArray(newsData) && newsData.map(
                        (val, i) => (
                            <NewsCard
                                key = {i}
                                index = {i}
                                newsObj = {val}
                                newsCategory = {val.category.join(", ")}
                                mode = {mode}
                                handleReadMore = {handleReadMore}
                            /> 
                        ))
                    : Array.isArray(filteredObjects) && filteredObjects.map(
                        (val, i) => (
                            <NewsCard
                                key = {i}
                                index = {newsData.indexOf(val)}
                                newsObj = {val}
                                newsCategory = {modifiedCategory(val)}
                                mode = {mode}
                                handleReadMore = {handleReadMore}
                            /> 
                        )
                )}
            </div>
            { // use readObj.length instead of showNewsDetail
                Object.keys(readObj).length && <NewsDetail readObj={readObj} handleDismiss={handleDismiss} mode={mode}/>
            }
        </>
    )
}