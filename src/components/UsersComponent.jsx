"use client";
import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { Roboto } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/AppSlice";
import Loader from "./Loader";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function UsersComponent() {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.users);
	// const users = useSelector((state) => state.users.data);
	console.log(loading, error);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading)
		return (
			<div
				className={`${roboto.className} text-white text-[5rem] h-screen bg-slate-600 my-[10rem] rounded-[0.8rem]  mx-[5rem] w-full`}>
				Loading...
			</div>
		);
	if (error)
		return (
			<div className="text-white text-[5.6rem]">No Data to Show: {error}</div>
		);

	return (
		<div
			className={`${roboto.className} h-screen bg-slate-600 my-[5rem] mx-[5rem] rounded-[0.8rem] overflow-y-auto`}>
			<div className="mt-[3rem]">
				{users.map((user, index) => (
					<UserCard key={index} user={user} />
				))}
			</div>
		</div>
	);
}

export default UsersComponent;
