import { Typography } from "@mui/material";
import React from "react";
import IconCode from "./components/IconCode";
import IconFlowChart from "./components/IconFlowChart";
import IconGuide from "./components/IconGuide";
import IconReadme from "./components/IconReadme";
import IconTable from "./components/IconTable";
import IconTodo from "./components/IconTodo";
import { CardContent, CardTemplate, Templates } from "./style";

const TemplatesView: React.FC<any> = (props) => {	
	const { isOpenTemplates, createTextTemplate } = props;
	return (
		<Templates open={isOpenTemplates}>
			<CardTemplate onClick={createTextTemplate}>
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
				
			<CardTemplate>
				<CardContent>
					<IconReadme />
				</CardContent>
				<Typography variant="caption">Readme</Typography>
			</CardTemplate>
				
			<CardTemplate>
				<CardContent>
					<IconGuide />
				</CardContent>
				<Typography variant="caption">Guide</Typography>
			</CardTemplate>				

			<CardTemplate>
				<CardContent>
					<IconCode />
				</CardContent>
				<Typography variant="caption">Code</Typography>
			</CardTemplate>	

			<CardTemplate>
				<CardContent>
					<IconFlowChart />
				</CardContent>
				<Typography variant="caption">Flow chart</Typography>
			</CardTemplate>					
		</Templates>
	);
};

export default TemplatesView;