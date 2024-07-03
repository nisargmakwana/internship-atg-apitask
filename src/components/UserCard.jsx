import React from "react";
import { Roboto } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "@/store/AppSlice";
import DefaultImg from "./DefaultImg";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function UserCard({ user }) {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setCurrentUser(user));
	};
	const curUser = useSelector((state) => state.users.curUser);
	const defaultAvatar = "default-profile.jpg";

	return (
		<div
			onClick={handleClick}
			className={`${roboto.className} w-[60rem] bg-slate-300 mx-auto mb-[1rem] rounded-[0.6rem]`}>
			<div className="pl-[2rem] flex gap-[5rem] py-[2rem] shadow-md">
				{/* <img
					src={user.avatar}
					alt="User's Profile Picture"
					className="rounded-full w-[13rem] h-[13rem] shadow-md"
				/> */}
				<DefaultImg
					className="rounded-full w-[13rem] h-[13rem] shadow-md"
					src={user.avatar}
					alt="User Avatar"
					defaultSrc={defaultAvatar}
				/>
				<div className="flex flex-col justify-between">
					<div>
						<p className="text-[2rem]">
							{user.profile.firstName} {user.profile.lastName}
						</p>
						<p className="text-[1.6rem] text-slate-700">{user.jobTitle}</p>
					</div>
					<p className="text-[1.4rem]">{user.profile.email}</p>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
