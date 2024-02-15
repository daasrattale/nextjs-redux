'use client';
import { UserEdit, UserProfile } from "@/components";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
    return (
        <Provider store={store}>
            <div className="flex flex-row w-screen mx-20 justify-center mt-20 gap-10">
                <UserEdit />
                <UserProfile />
            </div>
        </Provider>
    );
}
