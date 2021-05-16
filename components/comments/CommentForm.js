import { useCallback } from 'react' 
import Axios from 'axios'
import defaultConfig from '../../config'

const CommentForm = ({...props}) => {

    let fields = {
        author_name : '',
        author_email : '', 
        content : '', 
        post : props.post_id //getting this from the main component
    }

    const fieldChangeHandler = (e)=>{
        switch(e.target.name){
            case 'commenter-name':
                fields.author_name = e.target.value;
            break;
            case 'commenter-email':
                fields.author_email = e.target.value;
            break;
            case 'commenter-message':
                fields.content = e.target.value;
            break;
        }
        
    } 

    const handleSubmit = useCallback( async (e) => {        
         
        e.preventDefault();        

        const url = `${defaultConfig.apiUrl}/wp-json/wp/v2/`;

        let response = await Axios({
                method : 'post',
                url : url + `comments`,
                data : fields                 
            }
        );
    }, [])

    return (
        <>
            <h2>Add a Comment</h2> 
            <form onSubmit={handleSubmit}>
                <input onChange={fieldChangeHandler} type="text" name="commenter-name" placeholder="name"/>
                <input onChange={fieldChangeHandler} type="email" name="commenter-email" placeholder="email"/>
                <textarea onChange={fieldChangeHandler} name="commenter-message" placeholder="Votre commentaire"/>
                <button type="submit" className="primary">Submit</button>
            </form>
        </>
    )
}

export default CommentForm