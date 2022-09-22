import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import ProfileFormView from "./ProfileFormView";
import schema from "./schema";
import { IProfileUserData } from "./types";

const ProfileForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IProfileUserData>({
		resolver: yupResolver(schema),
		mode: "all",
	});
	const queryClient = useQueryClient();

	const fetchProfileForm = async () => {
		const { data } = await api.get("auth/account");
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

	const mutationProfileForm = async (form: IProfileUserData) => {
		const { data } = await api.put("auth/account", form);
		return data;
	};

	const { mutate: fetchEditProfileForm, isLoading: isSaving } = useMutation<
		IProfileUserData,
		IFetchResponseDefault,
		any
	>(mutationProfileForm, {
		onSuccess: () => queryClient.invalidateQueries(["profile_form"]),
	});

	return (
		<ProfileFormView
			{...{
				register,
				isLoading,
				errors,
				profileUserData,
				handleSubmit,
				fetchEditProfileForm,
				isSaving,
			}}
		/>
	);
};

export default memo(ProfileForm);
