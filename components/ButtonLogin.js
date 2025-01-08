import Link from "next/link";


const ButtonLogin = ({isLoggedIn, name}) => {


    if(isLoggedIn){
        console.log("welcome", name)

        return <Link href="/dashboard" className="btn btn-primary">
            <p>Welcome back {name} </p>
            </Link>;
    }

    return <button>Login</button>;
    
};

export default ButtonLogin;