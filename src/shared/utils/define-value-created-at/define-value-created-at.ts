import { dateFormat } from "shared/utils/dateFormat";

export const defineValueCreatedAt = (value: string | undefined) =>
	value ? dateFormat(value) : "";
