import { Editor } from "@bytemd/react";
import "bytemd/dist/index.css";
import Loading from "shared/components/Loading";
import { PLUGINS } from "./constant";
import HeaderText from "./HeaderText";
import { Markdown } from "./style";
import { IMarkdownView } from "./types/Markdown.component";

const MarkdownView: React.FC<IMarkdownView> = (props) => {
	const { data, onChangeText, saveText, onChangeTextTitle, isLoading, isSaving } = props;
	const { title_board, title_text, text } = data;
	
	if(isLoading) {
		return <Loading isLoading backdrop />;
	}
	
	return (
		<>
			<Loading isLoading={isSaving} backdrop />
			<HeaderText {...{ saveText, onChangeTextTitle }} titleBoard={title_board} titleText={title_text} />
			<Markdown>
				<Editor value={text} onChange={onChangeText} plugins={PLUGINS} />
			</Markdown>
		</>
	);
};

export default MarkdownView;	