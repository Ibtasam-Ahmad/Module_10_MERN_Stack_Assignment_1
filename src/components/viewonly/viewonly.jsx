import './viewonly.css'
import { Space } from '../space/space'
import { Avatar } from "@mui/material";

export const View =()=>{
    const image =undefined
    const username='Ibtasam Ahmad'
    const title='tour2022',
    description='Lorem Ipsum',
    location='lahore,pakistan'

    return<>
    <div className='main_view'>
        {/* post header */}
        <div className="flex">
            <div className='avatar_margin'>
            {
                    image ? 
                    <img src={ image } alt="userImage" /> :
                    <Avatar />
                }
            </div>
            
            <h1>{ username }</h1>
        </div>
        <Space/>
        {/* image */}
        <div className='blackbox'></div>
        <Space/>
        {/* post footer */}
        <div className='flex justify_button'>
            <div>
            <h2 className='no-margin'>{title}</h2>
            {/* <h4>{createdDate}</h4>c */}
            </div>
        </div>
        <div className='flex'>
            <h3>{description}</h3>
        </div>
        <Space/>
        <div className='flex'>
            <p className='location'>{ location }</p>
        </div>

    </div>
    </>
}