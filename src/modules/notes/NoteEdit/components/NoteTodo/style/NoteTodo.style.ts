import { styled } from "@mui/material";

export const TodoContainer = styled("div")(
	() => `
        display: flex;
        flex-direction: column;
    `
);

export const Todo = styled("div")(
	() => `
        .MuiFormControl-root {
            > div {
                > input {
                    padding-left: 0;
                }

                > fieldset {
                    border: 0;
                }
            }

        }
    `
);
