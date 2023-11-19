import { FaThumbsUp } from "react-icons/fa";
import './Post.css';
const Post=(props)=>{
    return(
        <div className='post'>
            <div className='post-desc'>
                <div className="tilte-icon">
                    <h1>{props.title}</h1>
                    <FaThumbsUp size={25} className="thumbsup"/>
                </div>
                <p>{props.desc}</p>
                <p className='by-tag'>
                    <h5 className='name'>{props.name}</h5> 
                    <h5> {props.nameBy}</h5>
                    <h5 className='views'>{props.views}</h5>
                </p>
            </div>
            <hr className='hr-tag'/>   
        </div>
    );
}
export default Post;