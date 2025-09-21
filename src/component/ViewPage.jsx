import React from 'react'
import './css.css'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/devpadSlice';



const ViewPage = () => {

const {id} = useParams();

const allPastes = useSelector((state) => state.devpad.pastes);

const paste = allPastes.filter((p) => p._id === id)[0];














  return (
   
    <div className='Home-page'>
      <div className='mac'>
        <div id='r'></div>
        <div id='y'></div>
        <div id='g'></div>

      </div>
      <div id=''>
         <input id='input' type="text"
              value={paste.title}
              disabled
              placeholder='Enter Title :'
              onChange={(e)=>setTitle(e.target.value)}
      /> 
      {/* <button onClick={createPaste}>
        {
          pasteId ? "Update Note" : "Create Note"
        }
      </button> */}
      </div>
     
          <br />

  <div>
    <textarea 
              value={paste.content}
              onChange={(e)=> setValue(e.target.value)}
              rows={30}
              disabled
              style={ {  borderTop:'15px solid gray' , width: '654px', padding:'5px', backgroundColor: 'rgb(39, 40, 45)', color:'white', borderRadius:'3px'}}
              placeholder='Enter Code Here >>> '
    />
  </div>
    </div>

  )
}

export default ViewPage
