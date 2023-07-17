import axios from "axios";

export const regenerateTokens = () => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/auth/refresh-token', {

        }, { withCredentials: true })
            .then(data => {
                console.log("Regenerated")
                resolve()
            }).catch(err => {
                console.log(err)
                reject()
                return
            })
    })

}