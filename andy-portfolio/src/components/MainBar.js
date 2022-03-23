import React from "react";
import UserCard from "./UserCard";

const MainBar = () => {
    const myInfo = {
        name: "Andy Yuen",
        github: "https://github.com/andy51011",
        address: "2032 Sandcreek Way, Alameda, CA 94501",
        Interests: "Hiking, Biking, and Fishing",

    }
    return (
        <>
            <h1>Welcome To My Portfolio!</h1>
            <div>
                <UserCard myInfo={myInfo} />
            </div>
        </>
    )
}

export default MainBar