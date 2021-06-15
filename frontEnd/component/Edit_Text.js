import React from 'react'
import EdiText from 'react-editext'
import "../style/edit_text.css"

function Edit_Text(props) {
var onSave = val => {
        console.log('Edited Value -> ', val)
      }
    return (
        <div className="edit_text">
            <EdiText
            type='text'
            value={props.value}
            onSave={onSave}
      />
        </div>
    )
}

export default Edit_Text;
