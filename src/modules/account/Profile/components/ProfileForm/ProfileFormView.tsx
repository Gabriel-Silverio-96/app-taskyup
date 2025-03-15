import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography } from "@mui/material";
import type { IProfileFormView } from "modules/account/Profile/components/ProfileForm/types";
import React from "react";
import Loading from "shared/components/Loading";
import { fieldErrors } from "shared/utils/field-errors";

const ProfileFormView: React.FC<IProfileFormView> = props => {
	const {
		register,
		isLoading,
		errors,
		data,
		handleSubmit,
		mutate,
		isSaving,
	} = props;

	const firstName = data?.full_name.split(" ").shift();

	return (
		<>
			<Loading backdrop isLoading={isLoading} />
			<Typography variant="h5" sx={{ mb: 5 }}>
				Hi, {firstName}
			</Typography>
			<form method="post" onSubmit={handleSubmit(mutate)}>
				<Grid container direction="column" spacing={5}>
					<Grid item>
						<TextField
							label="Full name"
							size="small"
							fullWidth
							defaultValue={data?.full_name}
							InputLabelProps={{ shrink: true }}
							autoComplete="off"
							{...register("full_name")}
							{...fieldErrors({ errors, field: "full_name" })}
						/>
					</Grid>
					<Grid item>
						<TextField
							label="Email"
							size="small"
							disabled
							aria-disabled="true"
							fullWidth
							defaultValue={data?.email}
							InputLabelProps={{ shrink: true }}
							{...register("email")}
						/>
					</Grid>
					<Grid item textAlign="right">
						<LoadingButton
							variant="contained"
							type="submit"
							loading={isSaving}>
							Save
						</LoadingButton>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default ProfileFormView;
