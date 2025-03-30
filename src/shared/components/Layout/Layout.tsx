import { memo } from "react";
import type { ILayout } from "shared/components/Layout/types";
import Snackbar from "./Snackbar";

const Layout: React.FC<ILayout> = ({ children }) => {
	return (
		<main>
			<Snackbar />
			{children}
		</main>
	);
};

export default memo(Layout);
