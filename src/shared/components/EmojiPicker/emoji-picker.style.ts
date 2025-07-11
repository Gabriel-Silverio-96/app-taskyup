import { styled } from "@mui/system";
import { IconButton as IconButtonMui } from "@mui/material";

interface IIconButton {
	emojiUrl: string;
}

export const IconButton = styled(IconButtonMui, {
	shouldForwardProp: prop => prop !== "emojiUrl",
})<IIconButton>(
	({ emojiUrl }) => `
       background-image: url(${emojiUrl});
       background-size: 80%;
       background-repeat: no-repeat;
       background-position: center;
	`
);
