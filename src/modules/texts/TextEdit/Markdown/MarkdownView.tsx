import { Editor } from "@bytemd/react";
import "bytemd/dist/index.css";
import Loading from "shared/components/Loading";
import { PLUGINS } from "./constant";
import HeaderText from "./HeaderText";
import { Markdown } from "./style";

const MarkdownView: React.FC<any> = (props) => {
	const { data, onChangeText, saveText, onChangeTextTitle, isLoading, isSaving } = props;
	
	if(isLoading) {
		return <Loading isLoading backdrop />;
	}
	
	return (
		<>
			<Loading isLoading={isSaving} backdrop />
			<HeaderText {...{ saveText, titleText: data.title_text, onChangeTextTitle }}/>
			<Markdown>
				<Editor
					value={data.text}
					onChange={onChangeText}
					plugins={PLUGINS}
				/>
			</Markdown>
		</>
	);
};

export default MarkdownView;	