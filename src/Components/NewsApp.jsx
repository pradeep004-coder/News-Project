import React, { useState } from 'react'
import NewsNavbar from './NewsNavBar'
import NewsBody from './NewsBody'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function NewsApp() {
    const categories = ["","general", "politics", "economics", "technology", "entertainment"]
    const [ currMode, setCurrMode ] = useState("Light")
    const ToggleF = () => {
        setCurrMode(currMode === "Light" ? "Dark" : "Light")
        document.body.style.backgroundColor = currMode === "Light" ? "#333" : "white"
    }
    return(
        <>
            <BrowserRouter>
                <NewsNavbar mode={currMode} onModeChange={ToggleF}/>
                <Routes>
                    {
                        categories.map((val)=>(
                            <Route path={`/${val}`} element={<NewsBody newsCategory={val===""?"":val} mode={currMode}/>}/>
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default NewsApp