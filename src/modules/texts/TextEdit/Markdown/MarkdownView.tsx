import "react-markdown-editor-lite/lib/index.css";
import HeaderText from "./HeaderText";
import { Markdown } from "./style";

const MarkdownView: React.FC<any> = (props) => {
	const { data, renderHTML, onChangeText, saveText, onChangeTextTitle } = props;
	
	return (
		<>
			<HeaderText {...{ saveText, titleText: data.title_text, onChangeTextTitle }}/>
			<Markdown value={data.text} renderHTML={renderHTML} onChange={onChangeText}/>
		</>
	);
};

export default MarkdownView;	