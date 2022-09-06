import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object({
	email: Yup.string().email().required()
});

const resolverSchema = yupResolver(schema);
export default resolverSchema;