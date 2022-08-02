import './login.css';
import { Space } from '../../components/space/space'

export const Login = () => {

    function newPost()
    {
        <p>
            New Post
        </p>
    }


    return<>
    
    <div className='login'>

        <button className='button' onClick={newPost()}>
            Email
        </button>

        < Space />

        <button className='button' onClick={newPost()}>
            Pasword
        </button>

        < Space />

        <button className='button' onClick={newPost()}>
            Sign In
        </button>

        < Space />

        <button className='button' onClick={newPost()}>
            Sign Up
        </button>

        < Space />

        <button className='forget' onClick={newPost()}>
            Forget Password
        </button>

    </div>
    
    </>
};