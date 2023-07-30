import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import { Drawer } from "./style";
import DialogSearchAll from "./components/DialogSearchAll/DialogSearchAll";
import { IDrawerView } from "./types";

const DrawerView: React.FC<IDrawerView> = ({ children }) => {
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