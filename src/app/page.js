"use client";
import { Provider } from "react-redux";
import store from "@/store/store";
import UsersComponent from "@/components/UsersComponent";
import UserDetails from "@/components/UserDetails";
export default function Home() {
	return (
		<>
			<Provider store={store}>
				<h1 className="text-center text-[3.5rem] text-white bg-black">
					Application Users
				</h1>
				<div className="grid grid-cols-2 place-content-center bg-black">
					<UsersComponent />
					<UserDetails />
				</div>
			</Provider>
		</>
	);
}
