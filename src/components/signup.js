import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);

    const navigate = useNavigate()

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signupState.password !== signupState['confirm-password']) {
            toast.error("Password doesn't matched")
            return
        }
        createAccount()
    }

    const notify = (err) => {
        toast.error(err, {
            theme: "dark"
        })
    }

    //handle Signup API Integration here
    const createAccount = () => {
        axios.post('http://localhost:4000/auth/register', {
            username: signupState.username,
            email: signupState['email-address'],
            password: signupState.password
        }).then(data => {
            console.log(data)
            toast.success("Successfully created an account", {
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
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>



        </form>
    )
}