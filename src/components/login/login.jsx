import './login.css'
import { Space } from '../space/space'

export const Login =()=>{
    return<>
    <div className='container'>
        <div className='flexs flex_dir'>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <div className='flex_dir'>
            <h2 className='email'>Email:</h2>
            <Space/>
            <input type="text" placeholder='enter your password'/>
            <Space/>
            </div>
        </div>
        <div className='flexs'>
            <div className='flex_dir'>
            <h2 className='password'>password:</h2>
            <Space/>
            <input type="password" placeholder='enter your password'/>
            </div>
        </div>
        <Space/>
        <Space/>
        <Space/>
        <div className='flexs'>
            <button className='button'>SignIn</button>
        </div>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <div className='flexs justify_button'>
            <button className='underline'> <u>signup</u></button>
            <button className='underline'> <u>Forget Password</u></button>
        </div>
    </div>
    </>
}