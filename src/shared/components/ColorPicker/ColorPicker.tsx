import { Typography } from "@mui/material";
import { forwardRef, memo } from "react";
import { ColorPickerContainer } from "shared/components/ColorPicker/color-picker.style";
import type { IColorPicker } from "shared/components/ColorPicker/types";

const ColorPicker = forwardRef<HTMLInputElement, IColorPicker>((props, ref) => {
	const { label, id, ...rest } = props;
	return (
		<ColorPickerContainer>
			<Typography variant="subtitle2" color="GrayText">
				<label htmlFor={id}>{label}</label>
			</Typography>
			<input type="color" {...rest} id={id} ref={ref} />
		</ColorPickerContainer>
	);
});

export default memo(ColorPicker);
