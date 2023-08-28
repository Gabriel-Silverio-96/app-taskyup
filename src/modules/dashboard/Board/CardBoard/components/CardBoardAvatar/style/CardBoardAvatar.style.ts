import { AvatarGroup as AvatarGroupMui, styled } from "@mui/material/";

export const AvatarGroup = styled(AvatarGroupMui)(
	({ theme }) => `
        margin-top: ${theme.spacing(1)};
        justify-content: start;

        .MuiAvatar-root {
            background-color: ${theme.palette.background.paper};
            color: ${theme.palette.common.white};
            font-weight: 700;
            width: ${theme.spacing(3)};
            height: ${theme.spacing(3)};
            font-size: ${theme.spacing(1.5)};
            border-color: ${theme.palette.grey[800]} !important;
            border-width: ${theme.spacing(0.5)} !important;
        }
    `
);
