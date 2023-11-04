import { Editor } from "@bytemd/react";
import Loading from "shared/components/Loading";
import { BYTEMD_EDITOR_PLUGINS } from "./constant";
import HeaderText from "./components/HeaderText";
import { Markdown } from "./style";
import { IMarkdownView } from "./types";

const MarkdownView: React.FC<IMarkdownView> = props => {
	const {
		dataText,
		onChangeText,
		handleClickSaveText,
		onChangeTextTitle,
		isLoading,
		isSaving,
	} = props;
	const { title_board, title_text, text } = dataText;

	if (isLoading) return <Loading isLoading backdrop />;

	return (
		<>
			<Loading isLoading={isSaving} backdrop />
			<HeaderText
				{...{ handleClickSaveText, onChangeTextTitle }}
				titleBoard={title_board}
				titleText={title_text}
			/>
			<Markdown>
				<Editor
					value={text}
					onChange={onChangeText}
					plugins={BYTEMD_EDITOR_PLUGINS}
				/>
			</Markdown>
		</>
	);
};

export default MarkdownView;
