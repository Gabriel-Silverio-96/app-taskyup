import SnackBar from "./SnackBar";
import { TLayoutView } from "./types/Layout.component";

const LayoutView: React.FC<TLayoutView> = ({ children }) => {
	return (
		<main>
			<SnackBar />
			{children}
		</main>
	);
};

export default LayoutView;