import Header from "./Header";
import SnackBar from "./SnackBar";
import { TLayoutView } from "./types/Layout.component";

const LayoutView: React.FC<TLayoutView> = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<SnackBar />
				{children}
			</main>
		</>
	);
};

export default LayoutView;