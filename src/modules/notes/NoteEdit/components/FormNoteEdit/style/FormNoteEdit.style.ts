import { TextField as TextFieldMui, styled } from "@mui/material";

export const FormHeaderNoteEdit = styled("div")(    
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

export const FormActionNoteEdit = styled("div")(    
	({ theme }) => `
        button:first-of-type {
            color: ${theme.palette.common.white};
        }
    `
);

export const TextFieldMultiple = styled(TextFieldMui)(    
	() => `        
        > div {
            padding: 0;
            > textarea {
                padding: 0;
            }

            > fieldset {
                border: 0;
            }
        }
    `
);