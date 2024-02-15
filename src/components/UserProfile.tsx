'use client';
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const UserProfile = () => {


    const user = useSelector((state: RootState) => state.user);

    const showStatus = () => {
        if (user.isLoading){
            return <span>Loading...</span>
        }
        return <span className={`text-${user.isVerified?'green':'red'}-500`}>{user.isVerified?'Verified':'Unverified'}</span>;
    }


    return (
        <div className=" w-full ">
            <h1 className="text-xl">Name: {user.name}</h1>
            <h1 className="text-xl">Email: {user.email}</h1>
            <h1 className="text-xl">Status: {showStatus()}</h1>
        </div>
    );
}