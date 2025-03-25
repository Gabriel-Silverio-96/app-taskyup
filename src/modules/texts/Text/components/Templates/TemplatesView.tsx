import { Typography } from "@mui/material";
import React from "react";
import Loading from "shared/components/Loading";
import {
	IconCode,
	IconDiagram,
	IconReadme,
	IconTable,
	IconTodo,
} from "modules/texts/Text/components/Templates/components/Icons";
import {
	TemplateContainer,
	TemplateLinearGradient,
	Templates,
} from "modules/texts/Text/components/Templates/templates.style";
import type { ITemplatesView } from "modules/texts/Text/components/Templates/types";
import CardTemplate from "modules/texts/Text/components/Templates/components/CardTemplate";

const TemplatesView: React.FC<ITemplatesView> = props => {
	const { isOpenTemplates, mutate, isLoading } = props;

	return (
		<TemplateContainer open={isOpenTemplates}>
			<Loading isLoading={isLoading} backdrop message="Creating text" />

			<Templates>
				<Typography variant="caption">Choose template</Typography>
				<div>
					<CardTemplate
						title="Table"
						icon={<IconTable />}
						onClick={() => mutate("table")}
					/>
					<CardTemplate
						title="Todo"
						icon={<IconTodo />}
						onClick={() => mutate("todo")}
					/>
					<CardTemplate
						title="Readme"
						icon={<IconReadme />}
						onClick={() => mutate("readme")}
					/>
					<CardTemplate
						title="Code"
						icon={<IconCode />}
						onClick={() => mutate("code")}
					/>
					<CardTemplate
						title="Diagram"
						icon={<IconDiagram />}
						onClick={() => mutate("diagram")}
					/>
				</div>
			</Templates>
			<TemplateLinearGradient />
		</TemplateContainer>
	);
};

export default TemplatesView;
