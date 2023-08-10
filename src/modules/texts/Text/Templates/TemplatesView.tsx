import { Typography } from "@mui/material";
import React from "react";
import Loading from "shared/components/Loading";
import IconCode from "./components/IconCode";
import IconDiagram from "./components/IconDiagram";
import IconReadme from "./components/IconReadme";
import IconTable from "./components/IconTable";
import IconTodo from "./components/IconTodo";
import {
	CardContent,
	CardTemplate,
	TemplateContainer,
	TemplateLinearGradient,
	Templates,
} from "./style";
import { ITemplatesView } from "./types/Template.types";

const TemplatesView: React.FC<ITemplatesView> = props => {
	const { isOpenTemplates, createTextTemplate, isLoading } = props;
	return (
		<TemplateContainer open={isOpenTemplates}>
			<Loading isLoading={isLoading} backdrop message="Creating text" />

			<Templates>
				<Typography variant="caption">Choose template</Typography>
				<div>
					<CardTemplate onClick={() => createTextTemplate("table")}>
						<CardContent>
							<IconTable />
						</CardContent>
						<Typography variant="caption">Table</Typography>
					</CardTemplate>

					<CardTemplate onClick={() => createTextTemplate("todo")}>
						<CardContent>
							<IconTodo />
						</CardContent>
						<Typography variant="caption">Todo</Typography>
					</CardTemplate>

					<CardTemplate onClick={() => createTextTemplate("readme")}>
						<CardContent>
							<IconReadme />
						</CardContent>
						<Typography variant="caption">Readme</Typography>
					</CardTemplate>

					<CardTemplate onClick={() => createTextTemplate("code")}>
						<CardContent>
							<IconCode />
						</CardContent>
						<Typography variant="caption">Code</Typography>
					</CardTemplate>

					<CardTemplate onClick={() => createTextTemplate("diagram")}>
						<CardContent>
							<IconDiagram />
						</CardContent>
						<Typography variant="caption">Diagram</Typography>
					</CardTemplate>
				</div>
			</Templates>
			<TemplateLinearGradient />
		</TemplateContainer>
	);
};

export default TemplatesView;
