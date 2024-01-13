import Snackbar from "./Snackbar";
import { TLayoutView } from "./types/Layout.component";

const LayoutView: React.FC<TLayoutView> = ({ children }) => {
	return (
		<main>
			<Snackbar />
			{children}
		</main>
	);
};

export default LayoutView;
