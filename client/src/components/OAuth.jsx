import { Button } from 'flowbite-react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/User/userSlice'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {
    const dispatch = useDispatch();
        const navigate = useNavigate()
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
    const handleGoogleClick = async()=>{
        provider.setCustomParameters({ prompt: 'select_account'})
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            console.log(resultsFromGoogle);
            console.log(resultsFromGoogle.user.photoURL)

            
            const res = await fetch('api/auth/google', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,              
                 }),
            })
            const data = await res.json();
            console.log(data);
            
            if(res.ok){
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <Button  type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2 '/>
        Continue with Google
    </Button>
  )
}

export default OAuth
