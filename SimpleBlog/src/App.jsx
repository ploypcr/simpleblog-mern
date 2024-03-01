import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BlogHomeList } from './components/BlogHome'
import Header from './components/Header'
import { SearchBox } from './components/SearchBox'
import { SearchBoxList } from './components/SearchBoxList'
import SignInButton from './components/SignInButton'
function App() {
  const [count, setCount] = useState(0)
  const [results, setResults] = useState([])
  const token = localStorage.getItem('accessToken');
  const blogs = [
    {id : 1,
    name : "Aroi mak mak",
    author : "John Doe",
    date : "May 18, 2018",
    description : "Hello World"
    },
    {id : 2,
      name : "Great Restaurant!",
      author : "Minnie mouse",
      date : "July 30, 2022",
      description : "Love",
    },
    {id : 3,
      name : "Travel",
      author : "Minnie mouse",
      date : "July 30, 2022",
      description : "Love",
    },
    {id : 4,
      name : "Tech",
      author : "Minnie mouse",
      date : "July 30, 2022",
      description : "Love",
    }
    ,    {id : 5,
      name : "Lifestyle",
      author : "Minnie mouse",
      date : "July 30, 2022",
      description : "Love",
    },
    {id : 6,
      name : "Tech",
      author : "Minnie mouse",
      date : "July 30, 2022",
      description : "Love",
    }
  ]
  return (
    <main>
      <div class='flex bg-black font-semibold'>
        <Header/>
        {token ? <SignInButton/> : null}
      </div>
      <SearchBox data={blogs} setResults={setResults}/>
      <SearchBoxList results={results}/>
      <BlogHomeList blogs={blogs}/>
    </main>
  );
}

export default App
