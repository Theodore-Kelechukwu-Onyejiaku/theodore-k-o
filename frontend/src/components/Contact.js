import { useState } from 'react'
import ParticlesBg from 'particles-bg'
import officebg from "../assets/images/office-rm-bg.png"
import { backend } from '../utils/urls'
import { toast } from "react-toastify"

export default function Contact() {
    const [sending, setSending] = useState(false)
    const [contactDetails, setContactDetails] = useState({ email: "", fullName: "", message: "" });
    const [errors, setErrors] = useState([])

    const validateEmail = (email) => {
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.match(emailRegex)) {
            return true
        } else {
            return false
        }
    }

    const handleFormInput = (e) => {
        setErrors([])
        setContactDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleErrors = () => {
        let hasError = false
        if (!(validateEmail(contactDetails.email))) {
            setErrors(prev => [...prev, "email address incorrect"])
            hasError = true
        }

        Object.keys(contactDetails).map(key => {
            if (contactDetails[key] === "") {
                setErrors(prev => [...prev, key.toLowerCase() + " is missing"])
                hasError = true
            }
        })
        return hasError
    }

    const handleFormSubmit = async (e) => {
        setErrors([])
        setSending(true)
        e.preventDefault()
        const hasErrors = await handleErrors();
        if (hasErrors) {
            setSending(false)
            return
        }
        try {
            let response = await fetch(`${backend}/email`, {
                method: "POST",
                body: JSON.stringify(contactDetails),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            response = await response.json()
            toast(response, { type: "success" })
            setSending(false)
        } catch (error) {
            toast("Something went wrong", { type: "error" })
            setSending(false)
        }
    }


    return (
        <div className='dark:bg-black dark:bg-opacity-100 py-10 md:p-10 px-5' id='contact'>
            <div className='card-no-bg w-64 mx-auto md:w-fit md:mx-0 my-5'>
                <span className='font-bold md:text-3xl p-5 dark:text-white w-64 text-center'>Contact Me</span>
            </div>
            <div className='flex py-5 flex-col space-x-0 space-y-10 md:space-y-0 md:space-x-10 md:flex-row'>

                <div className='basis-1/2'>
                    <form action='POST' onSubmit={handleFormSubmit}>

                        <div className='flex flex-col'>
                            <label className='dark:text-white my-3 '>Email Address</label>
                            <input onChange={handleFormInput} type="email" name='email' className='bg-transparent dark:text-white w-full p-4 rounded-lg' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='dark:text-white my-3 '>Full Name</label>
                            <input onChange={handleFormInput} type="text" name='fullName' className='bg-transparent dark:text-white w-full p-4 rounded-lg' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='dark:text-white my-3 '>Message</label>
                            <textarea onChange={handleFormInput} name="message" className='bg-transparent h-20 dark:text-white w-full p-4 rounded-lg'></textarea>
                        </div>
                        {errors.length > 0 ? <ul className='li list-disc font-bold p-3 text-red-600 border-red-500'>{errors.map(error => <li className=' list-item'>{error}</li>)}</ul> : null}

                        <div className='my-5 text-center md:text-left'>
                            <button disabled={sending} type='submit' className='rounded disabled:cursor-not-allowed  p-4 border text-white bg-[#ff2fff] dark:border-none font-bold shadow w-full md:w-60 text-center'>
                                {sending ? "Sending..." : "Sumbit"}
                            </button>
                        </div>
                    </form>

                </div>
                <div className='relative basis-1/2 bg-transparent'>
                    <div className='absolute z-40 w-full h-full dark:bg-black dark:bg-opacity-50'></div>
                    <img className='w-80 object-contain mx-auto relative z-40 h-96' src={officebg} alt="office" />
                    <ParticlesBg type="ball" id="ball-bg" bg={{
                        position: "absolute",
                        display: "block",
                        top: 0,
                        zIndex: 0,
                        width: "100%",
                        backgroundColor: "red !important",
                        color: "white",
                        borderRadius: "5px",
                    }} />
                </div>
            </div>
        </div>
    )
}