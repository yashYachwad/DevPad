import  React, { useEffect, useState } from 'react'
import './css.css'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/devpadSlice';


const Home = () => {
  const [ title, setTitle]= useState('');
  const [ Value, setValue] = useState('');
  const [ SearchParams , setSearchparams] = useSearchParams();
  const pasteId = SearchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) =>
  state.devpad.pastes);

  
   useEffect(()=>{
      if(pasteId){
        const paste = allPastes.find((p) =>
        p._id === pasteId);

        setTitle(paste.title);
        setValue(paste.content);
      }
     }, [pasteId]);




  function createPaste(){
  const paste = {
    title : title,
    content : Value,
    _id: pasteId || 
          Date.now().toString(36),
    createdAt: new Date().toISOString() ,   

     }


  
     
  if(pasteId){
      // Update
      dispatch(updateToPastes(paste));
  }else{
    //create
    dispatch(addToPastes(paste));
  }

// after update or create remove the title and content from home screen

    setValue('');
    setTitle('');

    setSearchparams({});
  }


  return (
    <div className='Home-page'>
      <div className='mac'>
        <div id='r'></div>
        <div id='y'></div>
        <div id='g'></div>

      </div>
      <div id=''>
         <input id='input' type="text"
              value={title}
              placeholder='Enter Title :'
              onChange={(e)=>setTitle(e.target.value)}
      /> 
      <button onClick={createPaste}>
        {
          pasteId ? "Update Note" : "Create Note"
        }
      </button>
      </div>
     
          <br />

        <div>
          <textarea 
                    value={Value}
                    onChange={(e)=> setValue(e.target.value)}
                    rows={30}
                    style={ {  borderTop:'15px solid gray' , width: '654px', padding:'5px', backgroundColor: 'rgb(39, 40, 45)', color:'white', borderRadius:'3px'}}
                    placeholder='Enter Code Here >>> '
          />
        </div>
    </div>

    
  )
}

export default Home 
