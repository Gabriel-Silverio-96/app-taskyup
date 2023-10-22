import GlobalStyles from "@mui/material/GlobalStyles";

const GlobalStylesMui = () => {
	const override = {
		a: {
			textDecoration: "none",
			color: "inherit",
		},
		"::-webkit-scrollbar-thumb": {
			backgroundColor: "#212121",
			cursor: "all-scroll",
		},
		"::-webkit-scrollbar": {
			width: "0.5rem",
			height: "0.2rem",
			backgroundColor: "#757575",
			borderRadius: "2rem",
			cursor: "all-scroll",
		},
	};

	return <GlobalStyles styles={{ ...override }} />;
};

export default GlobalStylesMui;
