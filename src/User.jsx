import './users.css'
export default function User ({useri}){
    const{name,email,phone} = useri;
    return(
        <div className="box">
            <h4>Name:{name}</h4>
            <h4>phone:{phone}</h4>
            <h5>Email:{email}</h5>
        </div>
    )
}