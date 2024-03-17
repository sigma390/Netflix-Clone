import Image from 'next/image';
import Input from '../components/Input';
import { useState } from 'react';

const Auth = ()=>{

    //state Vars

    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('')



    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className=" px-12 py-5">
                    <img src='/images/logo.png' alt='logo' className='h-12'/>
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full '>
                        <h2 className=' text-white text-4xl mb-8 font-semibold '>
                            Sign in
                        </h2>
                        <div className='flex flex-col gap-4'>
                            <Input
                            label='Email or phone number '
                            type='email'
                            onChange={(e:any)=>{setEmail(e.target.value)}}
                            value={email}
                            id='email'
                            
                            />

                            <Input
                            label='Password '
                            type='password'
                            onChange={(e:any)=>{setPassword(e.target.value)}}
                            value={password}
                            id='password'
                            
                            />
                            <button className='
                            bg-[#e60914] 
                            text-white
                            rounded-md
                            w-full
                            font-semibold
                            hover:bg-red-700
                            h-10
                            '
                            >
                                Sign In



                            </button>
                            <button className="text-white mt-1 text-center">
                              Forgot password?
                            </button>
                            <div className='flex flex-row'>
                            <input type="checkbox"
                            className=' accent-black'
                            
                            />
                            <label className='text-white
                            px-2
                            
                            ' htmlFor="checkbox">

                                Remember Me
                            </label>

                            </div>

                        



                        </div>
                    </div>
                </div>

            </div>
                
        </div>
    )
}

export default Auth;