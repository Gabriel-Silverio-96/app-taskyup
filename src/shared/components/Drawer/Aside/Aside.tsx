import React, { memo, useState } from "react";
import AsideView from "./AsideView";

const Aside: React.FC = () => {
	const [openAside, setOpenAside] = useState(true);
	const toogleOpenAside = () => setOpenAside(prevState => !prevState);
	
	return <AsideView {...{ openAside, toogleOpenAside }} />;
};

export default memo(Aside);