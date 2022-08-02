import './loggedin.css'
import { View } from '../viewonly/viewonly'
import { Main } from '../../pages/posts/main'

export const Loggedin =() =>{
    return<>
    <div className='header'>
        <div className='header_content'>
            <h1>You are Loggedin</h1>
            <div className='more_option'>
            <h2 className='h2'>view all posts</h2>
            <h3>+</h3>
            </div>
        </div>
    </div>
    <div>
        <View/>
        <Main/>
    </div>
    </>
}