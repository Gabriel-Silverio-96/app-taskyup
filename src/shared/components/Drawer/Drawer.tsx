import React, { memo } from "react";
import Aside from "shared/components/Drawer/components/Aside";
import DialogSearchAll from "shared/components/Drawer/components/DialogSearchAll";
import Header from "shared/components/Drawer/components/Header";
import { DrawerContainer } from "shared/components/Drawer/style";
import { IDrawer } from "shared/components/Drawer/types";

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
