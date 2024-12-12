export function Input({placeholder,type,reference}:{type:string; placeholder:string; reference:any; }){
    return <div>
        <input ref={reference} type={type} placeholder={placeholder} className="px-5 py-2 outline-green-400 border-2 m-1 rounded" />
    </div>
}
