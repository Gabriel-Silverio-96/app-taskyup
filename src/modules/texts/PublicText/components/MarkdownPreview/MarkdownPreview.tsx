import { Viewer } from "@bytemd/react";
import "bytemd/dist/index.css";
import "highlight.js/styles/default.css";
import { BYTEMD_EDITOR_PLUGINS } from "modules/texts/constants/text.constants";
import { MarkdownSectionPreview } from "./style";
import { IMarkdownPreview } from "./types/MarkdownPreview.types";

const MarkdownPreview: React.FC<IMarkdownPreview> = props => {
	const { text } = props;

	return (
		<MarkdownSectionPreview>
			<div className="bytemd">
				<div className="bytemd-body">
					<div className="bytemd-preview">
						<Viewer value={text} plugins={BYTEMD_EDITOR_PLUGINS} />
					</div>
				</div>
			</div>
		</MarkdownSectionPreview>
	);
};

export default MarkdownPreview;
