import { dateFormat } from "shared/utils/date-format";

export const defineValueCreatedAt = (value: string | undefined) =>
	value ? dateFormat(value) : "";
