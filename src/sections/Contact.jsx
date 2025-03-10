import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const emailId = 'service_y2vdwya' //TODO: Auslagern in die env
    const emailTemplateId = 'template_j37t583' //TODO: Auslagern in die env
    const mail = 'n.balaz@outlook.com' //TODO: Auslagern
    const emailJsPublicKey = 'nwW7KncHOZCzbGwoi' //TODO: Auslagern

    const [loading, setLoading] = useState(false)
    
    const formRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {
            await emailjs.send(
                emailId, 
                emailTemplateId, 
                {
                    from_name: nameRef.current.value,
                    to_name: 'Norbert',
                    from_email: emailRef.current.value,
                    to_email: mail,
                    message: messageRef.current.value,
                },
                emailJsPublicKey,
            )
            setLoading(false)
            alert('Your message has been sent!')

            formRef.current.reset()
        } catch (error) {
            console.error(error)
            alert('Something went wrong!')
        }
    }

    return (
        <section className='c-space my-20'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen'/>
                <div className='contact-container'>
                    <h3 className='head-text'>Let's talk</h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Wheather you're looking to build a new website, imporve your existing platform, or bring a unique project to life, I'm here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type="text" name="name" ref={nameRef} required className='field-input' placeholder='John Doe' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type="email" name="email" ref={emailRef} required className='field-input' placeholder='johndoe@gmail.com' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea name="message" ref={messageRef} required rows={5} className='field-input' placeholder="Hi, I'm interested in ..." />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact