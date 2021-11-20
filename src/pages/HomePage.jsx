import React, { useEffect, useState } from "react"
import axios from "axios"
import {ReactComponent as Loading} from "../loading.svg"

const HomePage = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const getNews =async () => {
            const {data} = await axios.get("http://localhost:8080/posts")
            setNews(data.data)
        }
        getNews()
    }, []) 
    return (
        <div>
            {
                news.length === 0 && (
                    <Loading />

                )
            }
            {
                news.length > 0 && (
                    <div>
                        {news.map( (item, index) => (
                            <p key={index}>{item.title}</p>
                        ))}
                    </div>
                )
            }
            home
        </div>
    )
}

export default HomePage