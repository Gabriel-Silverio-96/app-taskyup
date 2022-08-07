import GlobalStyles from "@mui/material/GlobalStyles";

const GlobalStylesMui = () => {
	const override = {
		a: {
			textDecoration: "none",
		},
	};

	return <GlobalStyles styles={{ ...override }} />;
};

export default GlobalStylesMui;
