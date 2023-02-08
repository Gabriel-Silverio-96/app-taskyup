import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextText } from "../Context";
import { IFetchCreateText } from "../types";
import { fetchCreateTextWithTemplate } from "./service";
import TemplatesView from "./TemplatesView";
import { Template } from "./types/Template.component";
import { mountBody } from "./utils/mount-body";

const Templates: React.FC = () => {
	const { board_id } = useParams();

	const { isOpenTemplates } = useContextText();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const mutationFn = async (template: Template) => {
		const body = await mountBody(template);
		const { data } = await fetchCreateTextWithTemplate(board_id, body);		
		return data;
	};

	const onSuccess = (data: IFetchCreateText) => {
		const { text_id } = data;
		queryClient.invalidateQueries(["texts"]);

		const redirectTo = `/text/edit?text_id=${text_id}&board_id=${board_id}`;
		navigate(redirectTo);
	};

	const optionsMutation = { onSuccess };
	const { mutate: createTextTemplate } = useMutation(mutationFn, optionsMutation);

	return <TemplatesView {...{ isOpenTemplates, createTextTemplate }} />;
};

export default memo(Templates);
