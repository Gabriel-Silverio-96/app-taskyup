import { memo } from "react";
import LayoutView from "./LayoutView";
import { ILayout } from "./types/Layout.component";

const Layout: React.FC<ILayout> = ({ children }) => {	
	return <LayoutView {...{ children }} />;
};

export default memo(Layout);