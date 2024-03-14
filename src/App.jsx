
import './App.css'
import Blogs from './Components/blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import Header from './Components/header/Header'
function App() {
 

  return (
    <div className='container mx-auto'>

    <Header></Header>
        <main className='md:flex'>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
        </main>

    </div>
  )
}

export default App
