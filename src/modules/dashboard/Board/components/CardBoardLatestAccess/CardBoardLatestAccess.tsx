import { Card, Grid, Typography } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";
import { useLatestAccess } from "shared/common/hooks/useLatestAccess";
import {
	CardBoardLatestAccessContainer,
	CardContent,
} from "modules/dashboard/Board/components/CardBoardLatestAccess/card-board-latest-access.style";

const CardBoardLatestAccess = () => {
	const { storage } = useLatestAccess();

	if (storage?.length === 0) return null;

	return (
		<Grid container spacing={2} mb={2}>
			<Grid item md={12}>
				<Typography variant="h6" fontWeight={800}>
					Latest access
				</Typography>
			</Grid>
			{storage?.map(({ id, title, path }: any) => (
				<Grid item xl={3} md={3} xs={12} key={id}>
					<Link to={path}>
						<CardBoardLatestAccessContainer>
							<Card sx={{ height: 55 }}>
								<CardContent>
									<Typography fontWeight={800} fontSize={16}>
										{title}
									</Typography>
								</CardContent>
							</Card>
						</CardBoardLatestAccessContainer>
					</Link>
				</Grid>
			))}
		</Grid>
	);
};

export default memo(CardBoardLatestAccess);
