import React from 'react';
import { ImFacebook2, ImLinkedin, ImTwitter } from "react-icons/im";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const formValue = e.target;
        console.log(formValue);
        emailjs.sendForm('service_oi7yqg7', 'template_s6so1rh', form.current, 'mY-pOLwctxtN0D_iJ')
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    toast.success('Message sent');
                }
            }, (error) => {
                console.log(error.text);
                toast.error("message not send")
            });
    };
    return (
        <div>
            <h1 className='text-4xl text-center my-10'>Contact Me</h1>
            <div className='flex flex-col lg:flex-row'>
                <div className="mockup-phone border-white">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1 space-y-5">
                            <div className="bg-neutral text-neutral-content border-2 rounded-lg">
                                <div className="w-80 card-body items-center text-center">
                                    <h2 className="card-title">Email</h2>
                                    <p className='border-1 p-1  rounded-md font-bold'>cr7.kamrul.9090@gmail.com</p>
                                </div>
                            </div>
                            <div className="bg-neutral text-neutral-content border-2 rounded-lg">
                                <div className="w-80 card-body items-center text-center">
                                    <h2 className="card-title">Phone</h2>
                                    <p className='border-1 p-1 rounded-md font-bold'>+01829423165</p>
                                </div>
                            </div>
                            <div className="bg-neutral text-neutral-content border-2 rounded-lg">
                                <div className="w-80 card-body items-center text-center">
                                    <h2 className="card-title">Address</h2>
                                    <p className='border-1 p-1  rounded-md font-bold'>School Road Sonaipul Bazar, Ramgarh, Khagrachhori, Chottogram, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content p-5 mt-10 ml-10">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Follow Me</h2>
                        <div className='flex space-x-5 p-5'>
                            <ImFacebook2 className='w-14 h-14 hover:text-orange-600'></ImFacebook2>
                            <ImTwitter className='w-14 h-14 hover:text-orange-600'></ImTwitter>
                            <ImLinkedin className='w-14 h-14 hover:text-orange-600'></ImLinkedin>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <h1 className='text-4xl font-semibold text-center'>Hire Me</h1>
                <form className='text-center' ref={form} onSubmit={sendEmail}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 w-full max-w-xl mx-auto'>
                        <input type="text" placeholder="Name" name='user_name' className="input input-bordered w-full max-w-sm" required />
                        <input type="text" placeholder="Email" name='user_email' className="input input-bordered w-full max-w-sm" required />
                        <input type="text" placeholder="Phone" name='user_phone' className="input input-bordered w-full max-w-sm" required />
                        <input type="text" placeholder="Subject" name='user_subject' className="input input-bordered w-full max-w-sm" required />
                    </div>
                    <textarea className="textarea textarea-bordered w-11/12 h-64" placeholder="Message" name='message' required></textarea><br />
                    <button type='submit' className='btn btn-outline btn-warning'>Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;