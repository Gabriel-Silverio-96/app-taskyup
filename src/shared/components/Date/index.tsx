import { forwardRef, HTMLAttributes, memo } from "react";
import { DateInput } from "./style";

const Date = forwardRef<HTMLInputElement>((props: HTMLAttributes<HTMLInputElement>, ref) => {    
	return <DateInput type="text" {...props} disabled ref={ref}/>;
});

export default memo(Date);