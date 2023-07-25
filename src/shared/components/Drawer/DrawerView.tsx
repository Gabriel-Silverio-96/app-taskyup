import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import { Drawer } from "./style";
import DialogSearchAll from "./components/DialogSearchAll/DialogSearchAll";

const DrawerView: React.FC<any> = ({ children }) => {
	return (
		<Drawer>
			<Header />
			<Aside />
			{children}
			<DialogSearchAll />
		</Drawer>
	);
};

export default DrawerView;