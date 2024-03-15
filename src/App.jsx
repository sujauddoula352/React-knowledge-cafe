
import { useState } from 'react'
import './App.css'
import Blogs from './Components/blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import Header from './Components/header/Header'


function App() {
 const [bookmarks, setBookmarks] = useState([]);

 const [readingTime, setReadingTime] = useState ([]);


 const handleAddToBookmark = blog =>{
 const newBookmarks = [...bookmarks, blog];
 setBookmarks(newBookmarks);
 };

 const heandlesMarkAsRead = time => {
   const newMarkAsRead = readingTime + time;
   setReadingTime(newMarkAsRead)
 }

  return (
    <div className='container mx-auto'>

    <Header></Header>
        <main className='md:flex'>
            <Blogs handleAddToBookmark ={handleAddToBookmark}
            heandlesMarkAsRead = {heandlesMarkAsRead}
            ></Blogs>

            <Bookmarks bookmarks = {bookmarks} 
            readingTime = {readingTime} ></Bookmarks>
        </main>

    </div>
  )
}

export default App;
