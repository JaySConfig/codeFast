import Link from "next/link";


const ButtonLogin = ({isLoggedIn, name, extraStyle}) => {
    console.log(extraStyle)


    if(isLoggedIn){
        console.log("welcome", name)

        return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ""} `}>
            <p>Welcome back {name} </p>
            </Link>;
    }

    return <button>Login</button>;
    
};

export default ButtonLogin;


//  {"btn btn-primary " + extraStyle}