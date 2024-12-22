import React, { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import {Alert, Button, TextInput} from 'flowbite-react'
import { app } from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateFailure, updateStart, updateSuccess } from '../redux/User/userSlice'
import { useDispatch } from 'react-redux'


const DashProfile = () => {
    const {currentUser} = useSelector((state)=> state.user);
    const [imageFile, setImageFile] = useState(null)
    const [imageFileURl, setImageFileURl] = useState(null)
    const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null)
    const [imageFileUploadError, setImageFileUploadError] = useState(null)
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch();
    const filePickerRef = useRef();
    const handleImageChnage = (e)=>{
      const file = e.target.files[0]
      if(file) {
        setImageFile(file);
        setImageFileURl(URL.createObjectURL(file));
      }
    }
    

    const handlechange = (e)=>{
      setFormData({...formData, [e.target.id]: e.target.value})
    }
    
    const handleSubmit = async(e)=>{
      e.preventDefault();
      if(Object.keys(formData).length === 0) {
        return;
      }
      try {
        dispatch(updateStart());
        
        
        const res = await fetch(`http://localhost:3000/api/user/update/${currentUser._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data);
        
        if(!res.ok) {
          dispatch(updateFailure(data.message))
        }else{
          dispatch(updateSuccess(data))
        }
      } catch (error) {
        dispatch(updateFailure(error.message))
      }
    }
    
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="file" accept='image/*' onChange={handleImageChnage} ref={filePickerRef} hidden/>
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={()=>filePickerRef.current.click()}>
          {imageFileUploadingProgress && (
            <CircularProgressbar value={imageFileUploadingProgress || 0} text={`${imageFileUploadingProgress}%`}
            strokeWidth={5}
            styles={{
              root:{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              },
              path: {
                stroke: `rgba(62, 152, 199, ${imageFileUploadingProgress / 100})`,
              }
            }}
            />

          )}
        <img src={imageFileURl || currentUser.profilePicture} alt="user"
         className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${imageFileUploadingProgress && imageFileUploadingProgress < 100 && 'opacity-50'}`}/>
        </div>
          {imageFileUploadError && <Alert color='failure'>{imageFileUploadError}</Alert>}
        
        <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} onChange={handlechange}/>
        <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} onChange={handlechange}/>
        <TextInput type='password' id='password' placeholder='password' onChange={handlechange} />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default DashProfile
