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
import Text_Cards from "../components/Text_Cards";



function Text() {

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
     {contents.length && <div className="flex gap-4 flex-wrap">
      {contents.map(({type, link, title}) => <Text_Cards
            type={type}
            link={link}
            title={title}
        />)}
        </div>}

{contents.length==0 && <div className="pl-80 justify-center items-center pt-24">
        <img className="bg-none" src="https://www.pinclipart.com/picdir/big/551-5515046_woman-having-no-idea-clipart-.png" height={200} width={200} alt="" />

        <h1 className="text-3xl font-extrabold text-green-500">No Content Available</h1>
        </div>}
      
    </div>
    </div>

  );
}

export default Text;
