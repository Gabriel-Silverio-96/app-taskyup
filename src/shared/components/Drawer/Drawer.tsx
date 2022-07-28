import React, { memo } from "react";
import DrawerView from "./DrawerView";

const Drawer: React.FC<any> = ({ children }) => {
	return <DrawerView {...{ children }} />;
};

export default memo(Drawer);