import PropTypes from 'prop-types';
import { BsBookmarkHeart } from "react-icons/bs";

const Blog = ({blog,  handleAddToBookmark, heandlesMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time, post_date, hashtags} = blog;


 return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the title ${title}`}/>

            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt=""/>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <h1>{post_date}</h1>
                    </div>
                </div>
                <div className='flex justify-center  items-center'>
                    <span className='text-xl'>{reading_time} minutes read</span>
                    <button 
                    onClick={() =>handleAddToBookmark(blog)}
                    className="mx-2 text-2xl"><BsBookmarkHeart></BsBookmarkHeart></button>

                </div>
            </div>

            <h2 className=" text-4xl mb-8 font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag,idx) => <span key={idx} className='text-[17px] mx-3 font-bold'><a href="">#{hashtag}</a></span> )
                }

            </p>
            <button
             onClick={() =>heandlesMarkAsRead(reading_time)}
              className=' text-purple-800 underline'> Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  heandlesMarkAsRead: PropTypes.func

}


export default Blog;