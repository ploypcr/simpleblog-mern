import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
    return (
        <div>
        <div class="bg-black">
            <Header/>
        </div>
        <div class='flex flex-col justify-center items-center px-6 py-12 lg:px-8'>
            <h1 class="text-xl mt-36 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                Sign in to your account
            </h1>
            <form class='mt-10'>
                <label class=''>
                    <p>Username</p>
                    <input type='text' class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'></input>
                </label>
                <Link to="xxx" class="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                </Link>
            </form>
        </div>
        </div>

    );
}
export default Login