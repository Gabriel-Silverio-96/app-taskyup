import "react-markdown-editor-lite/lib/index.css";
import Loading from "shared/components/Loading";
import HeaderText from "./HeaderText";
import { Markdown } from "./style";

const MarkdownView: React.FC<any> = (props) => {
	const { data, renderHTML, onChangeText, saveText, onChangeTextTitle, isLoading, isSaving } = props;
	
	if(isLoading) {
		return <Loading isLoading backdrop />;
	}
	
	return (
		<>
			<Loading isLoading={isSaving} backdrop />
			<HeaderText {...{ saveText, titleText: data.title_text, onChangeTextTitle }}/>
			<Markdown value={data.text} renderHTML={renderHTML} onChange={onChangeText}/>
		</>
	);
};

export default MarkdownView;	