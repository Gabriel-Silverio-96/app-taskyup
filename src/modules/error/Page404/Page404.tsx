import React from "react";
import { useNavigate } from "react-router-dom";
import Page404View from "modules/error/Page404/Page404View";

const Page404: React.FC = () => {
	const navigate = useNavigate();
	const backPage = () => navigate(-1);

	return <Page404View {...{ backPage }} />;
};

export default Page404;
