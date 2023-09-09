import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextText } from "../Context";
import { fetchPostTextService } from "../service";
import { IFetchPostTextResponse } from "../types";
import TemplatesView from "./TemplatesView";
import { TypeTemplateName } from "./types/Template.types";
import { mountTemplateBody } from "./utils/mount-template-body";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";

const Templates: React.FC = () => {
	const { board_id } = useParams();

	const { isOpenTemplates } = useContextText();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const mutationFn = async (templateName: TypeTemplateName) => {
		const body = await mountTemplateBody(templateName);
		const { data } = await fetchPostTextService(board_id, body);
		return data;
	};

	const onSuccess = (data: IFetchPostTextResponse) => {
		const { text_id } = data;
		queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]);

		const redirectTo = createURLQueryParams("/text/edit", {
			text_id,
			board_id,
		});
		navigate(redirectTo);
	};

	const optionsMutation = { onSuccess };
	const { mutate: createTextTemplate, isLoading } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<TemplatesView
			{...{ isOpenTemplates, createTextTemplate, isLoading }}
		/>
	);
};

export default memo(Templates);
