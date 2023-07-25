import axios from "axios";

export const regenerateTokens = () => {
    return new Promise((resolve, reject) => {
        axios.post('https://expensetrackerbackend-omqf.onrender.com/auth/refresh-token', {

        }, { withCredentials: true })
            .then(data => {
                console.log("Regenerated")
                resolve()
            }).catch(err => {
                // console.log(err)
                reject(err.response.data.error.message)
                return      
            })
    })

}