import React, { useState } from 'react'
import {create} from '../service/noteRetrieve'
import { useHistory } from 'react-router-dom'

function AddNoteForm() {
    let history = useHistory();
    const [titleFieldVisible, setTitleFieldVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const showTitleField = () => {
        setTitleFieldVisible(true)
    }
    const hideTitleField = ()  => {
        setTitleFieldVisible(false)
      }

    // submit form
    const data={title:title,content:content};
    const handleSubmit = e => {    
    e.preventDefault()
        create(data)
        history.push('/dashboard');
    } 

    return (
        <div >
          <div className="create-form">
			{titleFieldVisible && (
              <div className="backdrop" onClick={hideTitleField} />
            )}
            
			<form  className="create-note">
              {titleFieldVisible && (
                <input className="title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onFocus={showTitleField}
                name="title"
                placeholder="Title"
                />
              )}
			  
              <textarea
              className="text-area"
              value={content}
              onChange={e => setContent(e.target.value)}
              onFocus={showTitleField}
              name="content"
              placeholder="Take a note..."
              />
              <button type="Submit" onClick={handleSubmit}>
                <span>&#43;</span>
              </button>
            </form>
          </div>
        </div>
    )
}

export default AddNoteForm