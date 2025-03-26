import { Viewer } from "@bytemd/react";
import { BYTEMD_EDITOR_PLUGINS } from "modules/texts/text.constants";
import { MarkdownSectionPreview } from "modules/texts/PublicText/components/MarkdownPreview/markdown-preview.style";
import type { IMarkdownPreview } from "modules/texts/PublicText/components/MarkdownPreview/types/markdown-preview.types";

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
