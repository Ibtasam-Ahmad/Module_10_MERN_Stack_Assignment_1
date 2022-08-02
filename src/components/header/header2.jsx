import './header2.css';
import { Facebook } from '@mui/icons-material';
import { Space } from '../space/space';



export const Header2 = () => {

    function newPost()
    {
        <p>
            New Post
        </p>
    }

    return<>

    <div className='main'>

        <div className='logo'>
            <Facebook />

        </div>

        <div className='items'>
            <button className='button1 transparent' onClick={newPost()}>
                Posts
            </button>
            <button className='button1 transparent' onClick={newPost()}>
                Sign Up
            </button>
            <button className='button1 transparent' onClick={newPost()}>
                Log In
            </button>
        </div>

    </div>
    < Space />
    
    
    </>
};