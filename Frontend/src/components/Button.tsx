
type Variants="primary" | "secondary"

export interface ButtonProps{
  variant:Variants;
  size:"md" | "sm" | "lg";
  text: string;
  starticon?:any;
  endicon?:any;
  onClick?: ()=>void;
  loading?:boolean;
}

const variantStyle={
  "primary":"bg-green-700 text-white",
  "secondary":"bg-green-300 text-green-500"
}

const sizestyle={
  "sm":"p-2",
  "md":"p-5",
  "lg":"p-3 px-6"
}
const defaultSize= 'rounded-md m-2  flex items-center p-2'

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick} className={`${variantStyle[props.variant]} ${defaultSize} ${sizestyle[props.size]} ${props.loading ? "opacity-25":""}`} disabled={props.loading} >  {props.starticon ? <div className="pr-2">{props.starticon} </div>: null} {props.text} {props.endicon} </button> 
}

export default Button