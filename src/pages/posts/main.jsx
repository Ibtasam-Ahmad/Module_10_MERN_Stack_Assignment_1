import { Post } from "../../components/post/post";
import './main.css'

export const Main =()=>{
    const post = [
        {
            title: 'tour2022',
            username: 'Ibtasam Ahmad',
            description: 'Lorem Ipsum',
            location: 'lahore,pakistan',
            image: undefined
        },
        {
            title: 'Tour2022',
            username: 'Mudassar ',
            description: 'Lorem Ipsum',
            location: 'lahore,pakistan',
            image: undefined
        },
        {
            title: 'Lahore',
            username: 'Rao Bhai',
            description: 'Lorem Ipsum',
            location: 'university of Punjab',
            image: undefined
        }
    ]
    return <>
    <div className="mainBody">
    {
        post.map(x => {
            return <Post
                data = { x }
            />
        })
    }
    </div>
    
    </>
}

