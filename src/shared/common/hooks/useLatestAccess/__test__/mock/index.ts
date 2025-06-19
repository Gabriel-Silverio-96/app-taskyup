import { faker } from "@faker-js/faker";
import { LatestAccess } from "shared/common/hooks/useLatestAccess/types";

const PAGE_MOCK: LatestAccess = {
	id: faker.datatype.uuid(),
	title: faker.lorem.words(5),
	board_id: faker.datatype.uuid(),
	board_type: "texts",
};

export { PAGE_MOCK };
