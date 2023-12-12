import { Tooltip } from "@mui/material";
import { FiLock, FiUnlock } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";

const IconPublic: React.FC<{ isPublic: boolean }> = ({ isPublic }) => (
	<div>
		<div hidden={!isPublic}>
			<Tooltip title="Text is public">
				<span>
					<FiUnlock size={ICON_SIZE.SMALL} />
				</span>
			</Tooltip>
		</div>
		<div hidden={isPublic}>
			<Tooltip title="Text is not public">
				<span>
					<FiLock size={ICON_SIZE.SMALL} />
				</span>
			</Tooltip>
		</div>
	</div>
);

export default IconPublic;
