import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import ProfileFormView from "./ProfileFormView";
import schema from "./schema";
import { fetchPutProfile, fetchGetProfile } from "./service";
import { IFetchGetProfile, IProfileForm } from "./types";

const ProfileForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IProfileForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const queryClient = useQueryClient();

	const osSuccessQuery = (data: IFetchGetProfile) => {
		setValue("full_name", data.full_name);
		setValue("email", data.email);
	};

	const queryKey = ["profile_form"];
	const optionsQuery = { onSuccess: osSuccessQuery };

	const { data, isLoading } = useQuery<IFetchGetProfile>(queryKey, fetchGetProfile, optionsQuery);

	const onSuccessMutation = () => {
		queryClient.invalidateQueries(["profile_form"]);
	};

	const optionsMutation = { onSuccess: onSuccessMutation };
	const { mutate: fetchEditProfileForm, isLoading: isSaving } = useMutation(fetchPutProfile, optionsMutation);

	return (
		<ProfileFormView
			{...{
				register,
				isLoading,
				errors,
				data,
				handleSubmit,
				fetchEditProfileForm,
				isSaving,
			}}
		/>
	);
};

export default memo(ProfileForm);
