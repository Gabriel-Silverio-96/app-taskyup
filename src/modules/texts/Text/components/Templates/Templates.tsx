import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextText } from "modules/texts/Text/Context";
import { fetchPostTextService } from "modules/texts/Text/services";
import { IFetchPostTextResponse } from "modules/texts/Text/types";
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
		const { data } = await fetchPostTextService({ board_id, body });
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

	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	return <TemplatesView {...{ isOpenTemplates, mutate, isLoading }} />;
};

export default memo(Templates);
