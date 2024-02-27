import { Link } from 'react-router-dom'
export default function SignInButton(){
    return(<Link to='/login' class='flex font-semibold text-3xl text-white ml-auto m-4'>
    Sign In
    </Link>);
}