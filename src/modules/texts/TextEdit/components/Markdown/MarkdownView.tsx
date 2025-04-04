import { Editor } from "@bytemd/react";
import Loading from "shared/components/Loading";
import HeaderText from "modules/texts/TextEdit/components/Markdown/components/HeaderText";
import { Markdown } from "modules/texts/TextEdit/components/Markdown/markdown.style";
import type { IMarkdownView } from "modules/texts/TextEdit/components/Markdown/types";
import { BYTEMD_EDITOR_PLUGINS } from "modules/texts/text.constants";

const MarkdownView: React.FC<IMarkdownView> = props => {
	const {
		dataText,
		onChangeText,
		mutate,
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
				handleClickSaveText={mutate}
				onChangeTextTitle={onChangeTextTitle}
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
