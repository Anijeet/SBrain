import { useEffect, useState } from "react";
import Button from "../components/Button";
import CreateContentModal from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
// import ShareIcon from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import { useContent } from "../hooks/UseContent";
// import { Link } from "react-router-dom";
// import BrainIcon from "../icons/BrainIcon";
import LogOut from "../icons/LogOut";
import { useNavigate } from "react-router-dom";
import Twitter_Cards from "../components/Twitter_Cards";



function Twitter() {

  const navigate=useNavigate()

  function logout(){
    localStorage.removeItem('token')
    navigate('/')
  }

  const [modalOpen,setModalOpen]=useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])


  return (
  
  <div>
    <Sidebar/>
    <div className="ml-72 p-3 min-h-screen bg-gray-100 ">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className="flex justify-end">
        <Button onClick={()=>{
          setModalOpen(true)
        }}
          starticon={<PlusIcon size="lg" />}
          variant="primary"
          text="Add Content"
          size="lg"
        />
        <Button onClick={logout}
          starticon={<LogOut size="md" />}
          variant="secondary"
          text="Log Out"
          size="lg"
        />
      </div>
      <div className="flex gap-4 flex-wrap">
      {contents.map(({type, link, title}) => <Twitter_Cards
            type={type}
            link={link}
            title={title}
        />)}
      </div>
    </div>
    </div>

  );
}

export default Twitter;
