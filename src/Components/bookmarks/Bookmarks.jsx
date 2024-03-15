import PropTypes from "prop-types"
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
    
   
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-4">
            <div>
                <h2 className="text-3xl bg-white mx-3 mt-4 p-4 rounded-xl"> Reading Time:{readingTime}</h2>
            </div>
         <h2 className="text-3xl  text-center rounded-sm p-4 m-4">Bookmarks Blogs:
            {bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => 
                <Bookmark
                    key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}


export default Bookmarks;