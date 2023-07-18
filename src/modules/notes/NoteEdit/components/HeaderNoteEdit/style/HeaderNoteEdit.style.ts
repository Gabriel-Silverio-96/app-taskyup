import { styled } from "@mui/material";

export const HeaderNoteEdit = styled("div")(
	() => `
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    `
);

export const HeaderNoteContent = styled("div")(    
	({ theme }) => `
        .MuiFormControl-root {
            > div {
                > input {
                    font-weight: 600;
                    font-size: ${theme.spacing(3)};
                    padding-left: 0;
                }

                > fieldset {
                    border: 0;
                }
            }

        }
    `
);

export const HeaderNoteEditAction = styled("div")(    
	({ theme }) => `
        button:first-of-type {
            color: ${theme.palette.common.white};
        }
    `
);