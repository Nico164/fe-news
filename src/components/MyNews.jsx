import axios from "axios"
import React, { Fragment, useEffect, useState } from "react"


const MyNews = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [news, setNews] = useState(undefined);
    useEffect(() => {
        getNews()
    }, [])

    const getNews = async () => {
        const token = window?.localStorage.getItem('token')
        try {
            setIsLoading(true)
            const { data } = await axios.get("http://localhost:8080/posts", {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            console.log(data?.data?.token)
            setNews(data?.data)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)

        }
    }
    return (
        <Fragment>
            {
                typeof (news) !== 'undefined' && news?.length > 0  && news.map ((item, index) => (
                    <div class="card mb-3" key={index}>
                        <div className="card-header">
                            {item?.title || "no title"}
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{item?.description || "-"}</p>
                            </blockquote>
                        </div>
                    </div>))
            }
        </Fragment>

    )
}

export default MyNews