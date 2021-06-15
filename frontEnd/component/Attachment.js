import React from 'react'
import "../style/attachment.css"
import PublishSharpIcon from '@material-ui/icons/PublishSharp';

function Attachment() {
    return (
        <div className="attachment">
            <div>
                 <button>
                    <PublishSharpIcon className="button" />
                    <p>Drag a file or Browse</p>
                </button>
            </div>
            <p className="para"> No Data Available In The Table</p>
        </div>
    )
}

export default Attachment;
