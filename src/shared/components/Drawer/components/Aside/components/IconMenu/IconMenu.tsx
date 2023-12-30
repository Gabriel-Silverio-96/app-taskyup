import { useTheme } from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";

const IconMenu: React.FC<{ openAside: boolean }> = ({ openAside }) => {
	const { palette } = useTheme();

	return (
		<>
			{openAside ? (
				<FiChevronLeft
					size={ICON_SIZE.MEDIUM}
					color={palette.common.white}
				/>
			) : (
				<FiChevronRight
					size={ICON_SIZE.MEDIUM}
					color={palette.common.white}
				/>
			)}
		</>
	);
};

export default IconMenu;
