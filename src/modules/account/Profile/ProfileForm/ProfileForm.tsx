import { AxiosResponse } from "axios";
import React, { memo, useEffect, useState } from "react";
import api from "shared/services/api";
import ProfileFormView from "./ProfileFormView";
import { IProfileUserData } from "./types";

const ProfileForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [profileUserData, setProfileUserData] = useState({} as IProfileUserData);

	const fetchProfileForm = async () => {
		try {
			const { data } = await api.get("auth/account") as AxiosResponse<IProfileUserData>;
			setProfileUserData(data);			
		} catch (error) {
			console.error("ProfileForm ", error);			
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {fetchProfileForm();}, []);

	return <ProfileFormView {...{ isLoading, profileUserData }}/>;
};

export default memo(ProfileForm);