import React, { memo } from "react";
import Aside from "./components/Aside";
import DialogSearchAll from "./components/DialogSearchAll/DialogSearchAll";
import Header from "./components/Header";
import { DrawerContainer } from "./style";
import { IDrawer } from "./types";

const Drawer: React.FC<IDrawer> = ({ children }) => {
	return (
		<DrawerContainer>
			<Header />
			<Aside />
			{children}
			<DialogSearchAll />
		</DrawerContainer>
	);
};

export default memo(Drawer);
