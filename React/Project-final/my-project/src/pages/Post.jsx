import {useEffect,useState} from 'react';
import axios from "axios";





function Post(){
    const [post,setPost] = useState([]);
    const [user,setUser] = useState([]);


    const handle =async ()=>{
        const respondPost = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPost(respondPost.data);
        console.log(respondPost.data);
    }





    return(
        <div className="mx-7">
            <h2 className="text-2xl text-neutral-700 font-bold">Post</h2>
            <p className="text-neutral-500 mb-4">Browse all registered users</p>
            <div>

            </div>

        </div>
            
    )
}

export default Post;
