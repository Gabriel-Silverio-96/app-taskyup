import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextText } from "../Context";
import { fetchPostTextService } from "../service";
import { IFetchPostTextResponse } from "../types";
import TemplatesView from "./TemplatesView";
import { Template } from "./types/Template.component";
import { mountTemplateBody } from "./utils/mount-template-body";
import { createURLQueryParams } from "shared/util/createURLQueryParams";

const Templates: React.FC = () => {
	const { board_id } = useParams();

	const { isOpenTemplates } = useContextText();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const mutationFn = async (templateName: Template) => {
		const body = await mountTemplateBody(templateName);
		const { data } = await fetchPostTextService(board_id, body);
		return data;
	};

	const onSuccess = (data: IFetchPostTextResponse) => {
		const { text_id } = data;
		queryClient.invalidateQueries(["texts"]);

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
