interface ITemplate {
	title_text: string;
	markdown: RequestInfo | URL;
}

export interface ITemplatesMapping {
	table: ITemplate;
	todo: ITemplate;
	readme: ITemplate;
	code: ITemplate;
	diagram: ITemplate;
}
