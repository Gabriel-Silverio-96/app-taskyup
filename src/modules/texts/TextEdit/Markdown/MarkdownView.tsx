import "react-markdown-editor-lite/lib/index.css";
import { Markdown } from "./style";

const MarkdownView: React.FC<any> = (props) => {
	const { data, renderHTML, onChange } = props;
	
	return (
		<Markdown value={data.text} renderHTML={renderHTML} onChange={onChange}/>
	);
};

export default MarkdownView;	