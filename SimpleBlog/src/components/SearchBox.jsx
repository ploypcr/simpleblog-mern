import { useState } from "react";
import { FaSearch } from 'react-icons/fa'

export const SearchBox = ({data, setResults}) =>{
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value)
        const results = data.filter((blog) => {
            return blog.name.toLowerCase().includes(value.toLowerCase());   
        });
        setResults(results);
    }
    return(
        <div class='border-black border rounded-full flex h-20 w-7/12 ml-72 mt-10'>
            <input 
                type="text" 
                placeholder="Search" 
                class='text-slate-700 w-8/12 text-xl rounded-full pl-10   focus:outline-none'
                value={input}
                onChange={(e) => handleChange(e.target.value)}></input>
            <div class='pt-6 pl-56'>
                <FaSearch class='text-2xl flex justify-between  '/>
            </div>
        </div>
    );
}