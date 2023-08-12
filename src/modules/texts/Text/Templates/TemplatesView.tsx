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
	const { isOpenTemplates, createTextTemplate, isLoading } = props;
	return (
		<TemplateContainer open={isOpenTemplates}>
			<Loading isLoading={isLoading} backdrop message="Creating text" />

			<Templates>
				<Typography variant="caption">Choose template</Typography>
				<div>
					<CardTemplate
						title="Table"
						icon={<IconTable />}
						onClick={() => createTextTemplate("table")}
					/>
					<CardTemplate
						title="Todo"
						icon={<IconTodo />}
						onClick={() => createTextTemplate("todo")}
					/>
					<CardTemplate
						title="Readme"
						icon={<IconReadme />}
						onClick={() => createTextTemplate("readme")}
					/>
					<CardTemplate
						title="Code"
						icon={<IconCode />}
						onClick={() => createTextTemplate("code")}
					/>
					<CardTemplate
						title="Diagram"
						icon={<IconDiagram />}
						onClick={() => createTextTemplate("diagram")}
					/>
				</div>
			</Templates>
			<TemplateLinearGradient />
		</TemplateContainer>
	);
};

export default TemplatesView;
