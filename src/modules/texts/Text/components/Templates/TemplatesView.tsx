import { Typography } from "@mui/material";
import React from "react";
import Loading from "shared/components/Loading";
import {
	IconCode,
	IconDiagram,
	IconReadme,
	IconTable,
	IconTodo,
} from "./components/Icons";
import { TemplateContainer, TemplateLinearGradient, Templates } from "./style";
import { ITemplatesView } from "./types/Template.types";
import CardTemplate from "./components/CardTemplate";

const TemplatesView: React.FC<ITemplatesView> = props => {
	const { isOpenTemplates, handleClickCreateTextTemplate, isLoading } = props;
	return (
		<TemplateContainer open={isOpenTemplates}>
			<Loading isLoading={isLoading} backdrop message="Creating text" />

			<Templates>
				<Typography variant="caption">Choose template</Typography>
				<div>
					<CardTemplate
						title="Table"
						icon={<IconTable />}
						onClick={() => handleClickCreateTextTemplate("table")}
					/>
					<CardTemplate
						title="Todo"
						icon={<IconTodo />}
						onClick={() => handleClickCreateTextTemplate("todo")}
					/>
					<CardTemplate
						title="Readme"
						icon={<IconReadme />}
						onClick={() => handleClickCreateTextTemplate("readme")}
					/>
					<CardTemplate
						title="Code"
						icon={<IconCode />}
						onClick={() => handleClickCreateTextTemplate("code")}
					/>
					<CardTemplate
						title="Diagram"
						icon={<IconDiagram />}
						onClick={() => handleClickCreateTextTemplate("diagram")}
					/>
				</div>
			</Templates>
			<TemplateLinearGradient />
		</TemplateContainer>
	);
};

export default TemplatesView;