import "react-markdown-editor-lite/lib/index.css";
import { Markdown } from "./style";

const MarkdownView: React.FC<any> = (props) => {
	const { value, setValue, renderHTML } = props;
	return (
		<Markdown defaultValue={value} renderHTML={renderHTML} onChange={(event: any) => setValue(event.html)}/>
	);
};

export default MarkdownView;