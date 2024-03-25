import Image from 'next/image';
import Input from '../components/Input';
import { useCallback, useState } from 'react';
import axios from 'axios';
const Auth = ()=>{

    //state Vars

    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const[password,setPassword] = useState('')
    const[variant,setVariant] = useState('login')
    //toggl;e for signup and sign in
    const toggleVar = useCallback(()=>{
        setVariant((currantVar) => currantVar==='login'?'Register':'login')
    },[])

    //================> function for register <======================
    
    const register = useCallback(async()=>{
        try {
            await axios.post('/api/register',{
                email,
                username,
                password
            })
            
        } catch (error) {
            console.log(error);
        }

    },[])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className=" px-12 py-5">
                    <img src='/images/logo.png' alt='logo' className='h-12'/>
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full '>
                        <h2 className=' text-white text-4xl mb-8 font-semibold '>
                            {variant === 'login'?'Sign in':'Register'}
                        </h2>
                        <div className='flex flex-col gap-4'>
                           {variant==='Register' && (<Input
                            label='Username '
                        
                            onChange={(e:any)=>{setUsername(e.target.value)}}
                            value={username}
                            id='name'
                            
                            />) } 
                        
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
                                {/* //use of variant */}
                            {variant ==='login'?'Sign In':'Sign Up'  }
                               



                            </button>

                            {variant==='login'&&(
                                <button className="
                                hover:underline
                                
                                text-white mt-1 text-center">
                                  Forgot password?
                                </button>



                            )}

                            {variant==='login' && (
                                <div className='flex flex-row mt-16'>
                                <input
                                id='checkbox'
                                
                                type="checkbox"
                                className=' form-checkbox
                                
                                outline-white
                                
                                h-[18px] w-[18px] accent-black'
                                
                                />
                                <label className='text-white
                                px-2
                                
                                ' htmlFor="checkbox">
    
                                    Remember Me
                                </label>
    
                                </div>

                            )}
                            
                            
                            <p className="text-neutral-500 mt-1">
                            
                            {variant==='login'?'New to Netflix?':'Already a User?'}
                            <span
                            className='
                            font-semibold
                            text-white ml-1 :hover:underline
                            cursor-pointer'

                            //to connect to Var
                            onClick={toggleVar}
                            
                            >
                            {variant==='login'?'Sign up now':'Sign In'}
                            
                            </span>
                            </p>
                            <p className="text-neutral-500 text-sm mt-1">
                            This page is protected by Google reCAPTCHA 
                            to ensure you're not a bot. <span className='
                            text-blue-500
                            hover:underline
                            
                            '>Learn more.</span> 
                            </p>

                        



                        </div>
                    </div>
                </div>

            </div>
                
        </div>
    )
}

export default Auth;