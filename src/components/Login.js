import { useState, useEffect } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://expensetrackerbackend-omqf.onrender.com/auth/isLoggedIn", { withCredentials: true })
            .then(data => {
                navigate('/')
            }).catch(err => {
                console.log(err)
            })
    }, [])


    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    const notify = (err) => {
        toast.error(err, {
            theme: "dark"
        })
    }

    //Handle Login API Integration here
    const authenticateUser = () => {
        axios.post('https://expensetrackerbackend-omqf.onrender.com/auth/login', {
            email: loginState['email-address'],
            password: loginState.password
        }, {
            withCredentials: true,
        }).then(data => {
            toast.success("Logged in successfully", {
                theme: "dark"
            })
            navigate('/')
        }).catch((err) => {
            console.log(err)
            notify(err.response.data.error.message)
        })
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>

            <FormAction handleSubmit={handleSubmit} text="Login" />

        </form>
    )
}