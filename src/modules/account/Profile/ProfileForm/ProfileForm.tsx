import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import ProfileFormView from "./ProfileFormView";
import schema from "./schema";
import { fetchPutProfileService, fetchGetProfileService } from "./service";
import { IFetchGetProfileResponse, IProfileForm } from "./types";

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

	const osSuccessQuery = (data: IFetchGetProfileResponse) => {
		setValue("full_name", data.full_name);
		setValue("email", data.email);
	};

	const queryKey = ["profile_form"];
	const optionsQuery = { onSuccess: osSuccessQuery };

	const { data, isLoading } = useQuery<IFetchGetProfileResponse>(queryKey, fetchGetProfileService, optionsQuery);

	const onSuccessMutation = () => queryClient.invalidateQueries(["profile_form"]);
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate, isLoading: isSaving } = useMutation(fetchPutProfileService, optionsMutation);

	return (
		<ProfileFormView
			{...{
				register,
				isLoading,
				errors,
				data,
				handleSubmit,
				mutate,
				isSaving,
			}}
		/>
	);
};

export default memo(ProfileForm);
