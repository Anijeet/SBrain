import DeleteIcon from "../icons/DeleteIcons";
import ShareIcon from "../icons/ShareIcon";

interface CardProps {
    title?:string,
    link:string,
    type:"youtube" | "twitter" | "text"
}

const Youtube = ({title,link,type}:CardProps) => {
  return (
    <div>
     {type=="youtube" && <div className="p-8 bg-white rounded-md border border-gray-300 max-w-96 shadow-md min-h-72 min-w-72">
        <div className="flex justify-between ">
          <div className="flex items-center text-md ">
          <div className="pr-2 text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon size="md" />
              </a>
            </div>
            <span className="text-lg">{title}</span>
           
          </div>
          <div className="flex items-center ">
            <div className="text-gray-500">
              <DeleteIcon size="md" />
            </div>
          </div>
        </div>

        <div>
            {type=="youtube" && <iframe className="w-full pt-4" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  }

        
        </div>
      </div>}
    </div>
  );
};

export default Youtube;