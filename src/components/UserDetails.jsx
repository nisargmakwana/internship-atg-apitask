import React from "react";
import { Roboto } from "next/font/google";
import { useSelector } from "react-redux";
import DefaultImg from "./DefaultImg";

const defaultAvatar = "default-profile.jpg";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function UserDetails() {
	const curUser = useSelector((state) => state.users.curUser);
	console.log(curUser);

	if (!curUser) {
		return (
			<div className="text-white absolute text-[2.4rem] top-1/2 right-[20rem]">
				Please Select the Card to see their details
			</div>
		);
	}

	return (
		<div
			className={`${roboto.className} bg-slate-600 my-[5rem] mx-[5rem] rounded-[0.8rem]`}>
			<div className="max-w-[40rem]bg-slate-300 mx-auto my-[10rem] rounded-[0.6rem] flex flex-col">
				<div className="flex flex-col p-[4rem]">
					{/* <img
						src={curUser.avatar}
						alt="User's Profile Picture"
						className="w-[20rem] h-[20rem] rounded-full mx-auto"
                    /> */}
					<DefaultImg
						className="w-[20rem] h-[20rem] rounded-full mx-auto"
						src={curUser.avatar}
						alt="User Avatar"
						defaultSrc={defaultAvatar}
					/>
					<h1 className="text-[3.4rem] mx-auto">
						{curUser.profile.firstName} {curUser.profile.lastName}
					</h1>
					<p className="text-[2.4rem] text-slate-500 text-center">
						{curUser.Bio}
					</p>
				</div>
				<div className="mx-auto w-[23rem] text-slate-800 mb-[4rem]">
					<div className="flex flex-col">
						<p className="text-left text-[1.8rem] ">{curUser.jobTitle}</p>
						<p className="text-left text-[1.8rem] ">
							{curUser.profile.username}
						</p>
						<p className="text-left text-[1.8rem] ">{curUser.profile.email}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDetails;
