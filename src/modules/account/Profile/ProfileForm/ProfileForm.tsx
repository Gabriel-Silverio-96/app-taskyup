import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import ProfileFormView from "./ProfileFormView";
import schema from "./schema";
import { fetchGetProfileService } from "modules/account/Profile/services";
import { PROFILE_QUERY_KEY } from "./constants";
import { IProfileBody } from "./types";
import { mutationFetchPutProfileService } from "./utils/mutationFetchPutProfileService/mutationFetchPutProfileService";
import { IFetchGetProfileResponse } from "modules/account/Profile/services/types";

const ProfileForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IProfileBody>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const queryClient = useQueryClient();

	const osSuccessQuery = (data: IFetchGetProfileResponse) => {
		setValue("full_name", data.full_name);
		setValue("email", data.email);
	};

	const optionsQuery = { onSuccess: osSuccessQuery };

	const { data, isLoading } = useQuery<IFetchGetProfileResponse>(
		[PROFILE_QUERY_KEY.FETCH_GET_PROFILE],
		fetchGetProfileService,
		optionsQuery
	);

	const onSuccessMutation = () =>
		queryClient.invalidateQueries([PROFILE_QUERY_KEY.FETCH_GET_PROFILE]);
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate, isLoading: isSaving } = useMutation(
		mutationFetchPutProfileService,
		optionsMutation
	);

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
