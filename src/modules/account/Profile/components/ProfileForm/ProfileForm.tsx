import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ProfileFormView from "modules/account/Profile/components/ProfileForm/ProfileFormView";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { PROFILE_QUERY_KEY } from "modules/account/Profile/components/ProfileForm/constants";
import { IProfileBody } from "modules/account/Profile/components/ProfileForm/types";
import {
	fetchGetProfileService,
	fetchPutProfileService,
} from "modules/account/Profile/services";
import { IFetchGetProfileResponse } from "modules/account/Profile/services/types";
import { ProfileFormSchema } from "modules/account/Profile/components/ProfileForm/schema";

const ProfileForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IProfileBody>({
		resolver: yupResolver(ProfileFormSchema),
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

	const mutationFetchPutProfileService = ({ full_name }: IProfileBody) => {
		return fetchPutProfileService({ body: { full_name } });
	};

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
