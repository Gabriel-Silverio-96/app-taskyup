import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import { Drawer } from "./style";

const DrawerView: React.FC<any> = ({ children }) => {
	return (
		<Drawer>
			<Header />
			<Aside />
			{children}
		</Drawer>
	);
};

export default DrawerView;