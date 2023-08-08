interface ITemplate {
	title_text: string;
	markdown: RequestInfo | URL;
}

export interface ITemplates {
	table: ITemplate;
	todo: ITemplate;
	readme: ITemplate;
	code: ITemplate;
	diagram: ITemplate;
}
