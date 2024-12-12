import { Link } from "react-router-dom"
import BrainIcon from "../icons/BrainIcon"
import TwitterIcons from "../icons/TwitterIcons"
import YoutubeIcon from "../icons/YoutubeIcon"
import Sidebaritems from "./Sidebaritems"
import AllIcons from "../icons/AllIcons"
import TextIcons from "../icons/TextIcons"


const Sidebar = () => {
  

  return (
    <div  className="h-screen w-72 bg-white fixed left-0 top-0 border-r pl-6">
       <Link to='/'> <div className="text-2xl pt-4 font-semibold flex items-center gap-2 text-green-800">
           <div>{<BrainIcon/>}</div> <div>SBrain</div>
        </div></Link>
        <Link to='/dashboard' >
        <Sidebaritems item="All" icon={<AllIcons />} />
      </Link>
      <Link to='/twitter' >
        <Sidebaritems item="Twitter" icon={<TwitterIcons />} />
      </Link>
      <Link to='/youtube' >
        <Sidebaritems item="Youtube" icon={<YoutubeIcon />} />
      </Link>
      <Link to='/text' >
        <Sidebaritems item="Text" icon={<TextIcons />} />
      </Link>
    </div>
  )
}

export default Sidebar