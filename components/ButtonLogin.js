import Link from "next/link";


const ButtonLogin = ({isLoggedIn, name}) => {


    if(isLoggedIn){
        console.log("welcome", name)

        return <Link href="/dashboard">
            <p>Welcome Back {name} </p>
            </Link>;
    }

    return <button>Login</button>;
    
};

export default ButtonLogin;