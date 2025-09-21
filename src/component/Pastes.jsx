import './css.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/devpadSlice';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

import { FaEdit, FaTrash, FaEye, FaCopy, FaShareAlt } from 'react-icons/fa';

const Pastes = () => {

const pastes = useSelector((state) => state.devpad.pastes);
const [ searchTerm , setsearchTerm]=useState('');
const dispatch = useDispatch();

const filteredData = pastes.filter(
  (devpad)=> devpad.title.toLowerCase().includes(searchTerm.toLowerCase())
)

function handleDelete (pasteId){
  dispatch(removeFromPastes(pasteId));
}



  return (

<div className='back'>
            <div className='Pastes-page'>
                  <div className='mac'>
                            <div id='r'></div>
                          <div id='y'></div>
                          <div id='g'></div>
                  </div>
              <input id='input' type='text'
                      value={searchTerm}
                      onChange={(e) => setsearchTerm(e.target.value)}
                      placeholder='Search Here '></input>
            </div>
     <div className='pastes-box'>
        {
        filteredData.length > 0 && 
        filteredData.map(
          (paste) =>{
            return(

                <div id='dabba'>
                     <div id='content'>
                              <div style={{color:'green' , fontFamily: 'Poppins'}}>  {paste.title}</div> 
                            <br /> <hr /> <br />
                                {paste.content}
                       </div>
                     <div className='btn'> 
                          <button>
                            <Link to={`/?pasteId=${paste?._id}`}><FaEdit/></Link>
                          </button>

                          <button onClick={()=> handleDelete(paste?._id)}><FaTrash/></button>
                        
                          <button  >
                            <Link to={`/pastes/${paste?._id}`}><FaCopy/></Link>
                          </button>

                          <button onClick={()=> {
                            navigator.clipboard.writeText(paste?.content)
                            toast.success("Paste Copied ");
                          }}><FaCopy/></button>

                          {/* <button><FaShareAlt/></button> */}
                          <br />
                            { paste.createdAt}
                     </div>
                </div>
     
              ) 
            }   
           )
         }
      </div> 
</div>
  )
}

export default Pastes
