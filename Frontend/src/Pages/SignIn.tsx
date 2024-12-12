import { useRef } from "react"
import Button from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";
import BrainIcon from "../icons/BrainIcon";


export const SignIn = () => {

const usernameRef=useRef<HTMLInputElement>();
const passwordRef=useRef<HTMLInputElement>()
const navigate = useNavigate()


async function signin(){
  const username=usernameRef.current?.value;
  const password=passwordRef.current?.value 

  const response= await axios.post(BACKEND_URL + "/api/v1/signin",{
 
      username: username,
      password: password
  })
  const jwt=response.data.token
  localStorage.setItem("token",jwt)
  navigate('/dashboard')


}
  return (<div>
    <Link to="/"> <div className=" text-2xl pt-4 font-semibold flex items-center gap-2 text-green-800">
    <div>{<BrainIcon />}</div> <div>SBrain</div>
  </div></Link>
    <div className=' h-screen w-screen justify-center  flex items-center '>
      <div className=" h-[50vh] w-[26%] bg-gray-200 shadow-text shadow-2xl justify-center  items-center  rounded-3xl ">
      <div className="flex flex-col justify-center items-center relative top-20">
        <span className="text-xl font-semibold p-2">Sign In</span>
        <Input reference={usernameRef} type="text" placeholder="username"/>
        <Input reference={passwordRef} type="password" placeholder="password"/>
        
        <div className=" flex justify-center items-center">
          <Button onClick={signin} variant="primary" text="Sign In" size="sm" />
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}



