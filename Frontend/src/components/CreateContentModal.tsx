import { useRef, useState } from "react";
import CrossIcons from "../icons/CrossIcons";
import Button from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Text ="text",
}



const CreateContentModal = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);


  
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    onClose();
  }

  const [Link,setLink]=useState(true)
  function text_func(){
    setType(ContentType.Text);
    setLink(false)

  }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-800 fixed top-0 left-0 opacity-90 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded-md">
              <div
                className="flex justify-end cursor-pointer"
                onClick={onClose}
              >
                <CrossIcons />
              </div>
              <div>
                <Input type="text" reference={titleRef} placeholder={"Title"} />
                <Input type="text" reference={linkRef} placeholder={Link?"Link" :"Text" } />
              </div>
              <div>
                <h1 className="font-medium">Type</h1>
                <div className="flex gap-1 justify-center pb-2">
                  <Button
                    size="sm"
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  ></Button>
                  {  <Button
                    size="sm"
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                      setLink(true)
                    }}
                  ></Button>}
                   <Button
                    size="sm"
                    text="Text"
                    variant={
                      type === ContentType.Text ? "primary" : "secondary"
                    }
                    onClick={text_func}
                  ></Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" size="sm" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;
