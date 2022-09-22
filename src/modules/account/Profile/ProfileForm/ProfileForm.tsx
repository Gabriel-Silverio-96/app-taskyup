import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import api from "shared/services/api";
import ProfileFormView from "./ProfileFormView";
import { IProfileUserData } from "./types";

const ProfileForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IProfileUserData>();

	const fetchProfileForm = async () => {
		const { data } = (await api.get("auth/account"));
		return data;
	};

	const onSuccessFetchProfileForm = (data: IProfileUserData) => {
		setValue("full_name", data.full_name);
		setValue("email", data.email);
	};

	const { data: profileUserData, isLoading } = useQuery<IProfileUserData>(
		["profile_form"],
		fetchProfileForm,
		{ onSuccess: onSuccessFetchProfileForm }
	);

	const fetchSaveProfileForm = (form: IProfileUserData) => console.log(form);

	const onSubmit = handleSubmit(fetchSaveProfileForm);

	return (
		<ProfileFormView
			{...{ register, isLoading, profileUserData, onSubmit }}
		/>
	);
};

export default memo(ProfileForm);
