import React from 'react'
import NewsCard from './NewsCard'
import newsData from './newsData'
export default function NewsBody(props) {
    const filteredObjects = newsData.filter(items => items.category.includes(props.newsCategory))
    const modifiedCategory = (val)=>{
            if ( val.category.indexOf(props.newsCategory)!== 0 ) {
                return `${props.newsCategory}, ${val.category.filter(item => item !== props.newsCategory).join(", ")}`
            }
            else {
                return props.newsCategory
            }
    }
    return(
        <>
            <div className='row' style={{width : "100%", margin : "auto", marginTop : "20px"}}>
                { props.newsCategory === "" ?
                    newsData.map(
                        (val, i) => (
                            <NewsCard
                                key = {i}
                                newsHeadline = {val.headline}
                                newsDetail = {val.details}
                                newsCategory = {val.category.join(", ")}
                                mode = {props.mode}
                            /> 
                        ))
                    : filteredObjects.map(
                        (val, i) => (
                            <NewsCard
                                key = {i}
                                newsHeadline = {val.headline}
                                newsDetail = {val.details}
                                newsCategory = {modifiedCategory(val)}
                                mode = {props.mode}

                            /> 
                        )
                )}
            </div>
        </>
    )
}