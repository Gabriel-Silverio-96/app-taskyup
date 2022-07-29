import React, { memo } from "react";
import useLocalStorage from "shared/common/hook/useLocalStorage";
import AsideView from "./AsideView";

const Aside: React.FC = () => {
	const [openAside, setOpenAside] = useLocalStorage("@taskyup.aside.open", true);
	const toogleOpenAside = () => setOpenAside(prevState => !prevState);
	
	return <AsideView {...{ openAside, toogleOpenAside }} />;
};

export default memo(Aside);