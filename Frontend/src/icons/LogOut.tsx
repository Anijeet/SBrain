
import { IconsProps, IconsVariants } from './icons_props'

const LogOut = (props:IconsProps) => {
  return (
    <div>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/exit--v1.png" alt="exit--v1" className={IconsVariants[props.size]}/>
    </div>
  )
}

export default LogOut