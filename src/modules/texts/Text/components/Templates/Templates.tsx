import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTextContext } from "modules/texts/Text/Context";
import { postTextService } from "modules/texts/Text/services";
import TemplatesView from "modules/texts/Text/components/Templates/TemplatesView";
import type { TypeTemplateName } from "modules/texts/Text/components/Templates/types";
import { mountTemplateBody } from "modules/texts/Text/components/Templates/utils/mount-template-body";
import { createURLQueryParams } from "shared/utils/create-url-query-params";
import { TEXT_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";
import type { IPostTextResponse } from "modules/texts/Text/services/types";

const Templates: React.FC = () => {
	const { board_id } = useParams();

	const { isOpenTemplates } = useTextContext();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const mutationFn = async (templateName: TypeTemplateName) => {
		const body = await mountTemplateBody(templateName);
		const { data } = await postTextService({ board_id, body });
		return data;
	};

	const onSuccess = async ({ text_id }: IPostTextResponse) => {
		const redirectToTextEdit = createURLQueryParams("/text/edit", {
			text_id,
			board_id,
		});

		navigate(redirectToTextEdit);

		await Promise.all([
			queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]),
			queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
		]);
	};

	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	return <TemplatesView {...{ isOpenTemplates, mutate, isLoading }} />;
};

export default memo(Templates);
