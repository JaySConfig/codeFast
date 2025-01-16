import Link from "next/link";


const ButtonLogin = ({session, extraStyle}) => {
    console.log(extraStyle)


    if(session){
        

        return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ""} `}>
            <p>Welcome back {session.user.name} </p>
            </Link>;
    }

    return <button>Login</button>;

    // create login page

    // create email/passowrd form

    // make a post request to api/auth
    
};

export default ButtonLogin;


//  {"btn btn-primary " + extraStyle}