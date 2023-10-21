import { Viewer } from "@bytemd/react";
import "bytemd/dist/index.css";
import "highlight.js/styles/default.css";
import { BYTEMD_EDITOR_PLUGINS } from "modules/texts/constants/text.constants";
import { MarkdownPreview } from "./style";

const MarkdownPreviewView: React.FC<any> = props => {
	const { text } = props;

	return (
		<MarkdownPreview>
			<div className="bytemd">
				<div className="bytemd-body">
					<div className="bytemd-preview">
						<Viewer value={text} plugins={BYTEMD_EDITOR_PLUGINS} />
					</div>
				</div>
			</div>
		</MarkdownPreview>
	);
};

export default MarkdownPreviewView;
