import { useState } from 'react'
import Logo from './images/biglinkedin.png'
import { auth } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault()
  };

  const register = () => {
    if(!name) {
        return alert("please enter a full name");
    }

     auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoUrl: profilePic,
        })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                diplayName: name,
                photoUrl: profilePic,
            }))
        })
    })
    .catch((error) => alert(error))
  };

  return (
    <div className='grid place-items-center ml-auto mr-auto pt-2.5 pb-2.5'>
      <img src={Logo} className='object-contain h-[70px] mt-5 mb-5' alt="this is logo" />
      <form className='flex flex-col'>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name reqiured if regitering"
          type="text"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profile pic url (optional)"
          type="text"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Email"
          type="email"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className='w-[365px] h-[50px] text-[20px] pl-2.5 mb-2.5 rounded'
        />
        <button type="submit" onClick={loginToApp} className='w-[365px] h-[50px] text-[large] text-white bg-blue-600 rounded'>Sign in</button>
      </form>
      <p className='mt-5'>Not a member?{" "}
        <span className='text-blue-400 cursor-pointer' onClick={register}>Regiter now</span>
      </p>
    </div>
  )
}

export default Login
