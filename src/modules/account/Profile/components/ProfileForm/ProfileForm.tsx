import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	PROFILE_FORM_SCHEMA,
	PROFILE_QUERY_KEY,
} from "modules/account/Profile/components/ProfileForm/profile-form.constants";
import ProfileFormView from "modules/account/Profile/components/ProfileForm/ProfileFormView";
import type { IProfileBody } from "modules/account/Profile/components/ProfileForm/types";
import {
	getProfileService,
	putProfileService,
} from "modules/account/Profile/services";
import type { IGetProfileResponse } from "modules/account/Profile/services/types";
import React, { memo } from "react";
import { useForm } from "react-hook-form";

const ProfileForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IProfileBody>({
		resolver: yupResolver(PROFILE_FORM_SCHEMA),
		mode: "all",
	});

	const queryClient = useQueryClient();

	const osSuccessQuery = ({ email, full_name }: IGetProfileResponse) => {
		setValue("full_name", full_name);
		setValue("email", email);
	};

	const optionsQuery = { onSuccess: osSuccessQuery };

	const { data, isLoading } = useQuery<IGetProfileResponse>(
		[PROFILE_QUERY_KEY.FETCH_GET_PROFILE],
		getProfileService,
		optionsQuery
	);

	const onSuccessMutation = () =>
		queryClient.invalidateQueries([PROFILE_QUERY_KEY.FETCH_GET_PROFILE]);
	const optionsMutation = { onSuccess: onSuccessMutation };

	const mutationFetchPutProfileService = ({ full_name }: IProfileBody) => {
		return putProfileService({ body: { full_name } });
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
