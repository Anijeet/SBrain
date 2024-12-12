import { ReactElement } from 'react'

const Sidebaritems = ({item,icon}:{
    item:string,
    icon:ReactElement;
}) => {
  return (
    <div  className='flex gap-5 text-gray-800 cursor-pointer hover:bg-gray-300 items-center transition-all duration-400'>
        <div className='pt-3  pl-1 pb-3 '>
            {icon}
        </div>
        <div className='pt-2 pb-3 '>
            {item}
        </div>
         
    </div>
  )
}

export default Sidebaritems