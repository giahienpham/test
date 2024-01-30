import React from 'react';
import Axios from 'axios'
function PostForm(props) {
    const url =""
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser: ""
    });
    return (
        <div>
            <form>
                <input placeholder="name" type="text"></input>
                <input placeholder="date" type="text"></input>
                <input placeholder="iduser" type="text"></input>
            </form>
        </div>
    );
}

export default PostForm;