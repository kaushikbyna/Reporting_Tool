import React from 'react'
import "../style/comment.css"
import AddIcon from '@material-ui/icons/Add';

function Comments() {
    return (
        <div className="comment">
            <div className="add_comment">
                <button>
                    <AddIcon className="button" />
                    <p>Add Comment</p>
                </button>
            </div>
            <div className="textarea">
               <textarea placeholder="Enter Comment" rows={3}cols={120} ></textarea>
            </div>
            <div className="drop_files">
                <p>Drop Files Here or Click To Upload</p>
            </div>
        </div>
    )
}

export default Comments;
