import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { regenerateTokens } from '../lib/regenerateTokens'
import { useNavigate } from 'react-router-dom'

export const DashboardPage = () => {
    const navigate = useNavigate()
    const [userId, setUserId] = useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:4000/", { withCredentials: true })
            .then(data => {
                console.log(data)
                setUserId(data.data.aud)
            }).catch(err => {
                console.log(err)
                if (err.response.data.error.message === 'jwt expired') {
                    console.log(err.response.data.error.message)
                    regenerateTokens().then(setUpdate(!update))
                }
            })
    }, [update])
    return (
        <div>{userId}</div>
    )
}
