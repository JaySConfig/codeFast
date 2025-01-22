"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";


const ButtonLogin = ({session, extraStyle}) => {
    const dashboardUrl = "/dashboard";


    if(session){
        
        return <Link 
        href={dashboardUrl} 
        className={`btn btn-primary ${extraStyle ? extraStyle : ""} `}>
            <p>Welcome back {session.user.name || "friend"} </p>
            </Link>;
    }

    return (<button className={`btn btn-primary ${extraStyle ? extraStyle : ""} `}
            onClick={() => {
                signIn(undefined,{callbackUrl: dashboardUrl});
            }}>
        Get started
        </button>);

    // create login page

    // create email/passowrd form

    // make a post request to api/auth
    
};

export default ButtonLogin;


//  {"btn btn-primary " + extraStyle}