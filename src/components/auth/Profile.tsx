
export type ProfileProps={
    name:string
}
export const Profile=({name}:ProfileProps)=>{
    return <div>
                Private profile componenet  
                <p>Name is {name}</p>
           </div>
}