import './header.css';
import { Facebook } from '@mui/icons-material';
import { AccountBox } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import { Space } from '../space/space'
// import { Facebook } from "@mui/material";

export const Header = () => {

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
                < AccountBox />
            </button>
            <button className='button1' onClick={newPost()}>
                View all Pages
            </button>
            <button className='button1 transparent' onClick={newPost()}>
                < Add />
            </button>
        </div>

    </div>
    < Space />
    
    
    </>
};