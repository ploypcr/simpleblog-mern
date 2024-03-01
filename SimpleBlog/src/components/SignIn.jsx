import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


async function LoginUser(credentials){
    try{
        const response = await axios.post('http://localhost:3000/login', credentials)
        return response.data
    }catch(err){
        console.log(err.message)
    }
}
const Login = ({setToken}) => {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await LoginUser({"email":userName ,"password":password})
        localStorage.setItem('accessToken', data['token']);
        navigate('..');
    }
    return (
        <div>
        <div class="bg-black">
            <Header/>
        </div>
        <div class='flex flex-col justify-center items-center px-6 py-12 lg:px-8'>
            <h1 class="text-xl mt-36 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} class='mt-10'>
                <label class=''>
                    <p>Username</p>
                    <input type='text' onChange={e => setUserName(e.target.value)}class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'></input>
                </label>
                <button type="submit" class="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                </button>
                <div class='flex w-full'></div>
                    <p>Don't have account?</p>
                    <button type="">Sign Up</button>
            </form>
        </div>
        </div>

    );
}
export default Login