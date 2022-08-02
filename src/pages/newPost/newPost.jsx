import './newPost.css';
// import { Image } from '../../../public/logo512.png'
// import { Space } from "../../components/space/space";


export const NewPost = () => {

    function newPost()
    {
        <p>
            New Post
        </p>
    }

    return<>

    <div className='main'>

        <div className='buttons'>
            <button className='button1' onClick={newPost()}>
                New Post
            </button>
            <button className='button1' onClick={newPost()}>
                Edit Post
            </button>

        </div>
        <div className='image'>
            <img src={ Image } alt=''/>
            {/* <p>
                P
            </p> */}
        </div>
        {/* <Space /> */}
        <div className='title'>
            <h2>
                Title
            </h2>
        </div>
        <div className='discription'>
            <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem deleniti dolorem,
                 cupiditate odio minus reprehenderit quos non error voluptates praesentium tempore soluta est fugiat tenetur illo consequatur impedit inventore.
            </h5>
        </div>
        <div className='save'>
            <button className='button1' onClick={newPost()}>
                Save
            </button>
        </div>

    </div>
    
    </>

};