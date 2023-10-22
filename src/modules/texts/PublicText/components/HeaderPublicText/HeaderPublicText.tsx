import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IAuthState } from "shared/common/store/Auth/types/Auth.types";
import Logo from "shared/components/Logo";

const HeaderPublicTextView: React.FC = () => {
	const { isAuthenticated } = useSelector(
		(state: { auth: IAuthState }) => state.auth
	);

	return (
		<Grid container sx={{ my: 8 }}>
			<Grid item md>
				<Logo />
			</Grid>

			<Grid item md textAlign="right">
				{isAuthenticated === false && (
					<Link to="/auth/signin">
						<Button variant="contained">Create account</Button>
					</Link>
				)}
			</Grid>
		</Grid>
	);
};

export default HeaderPublicTextView;
