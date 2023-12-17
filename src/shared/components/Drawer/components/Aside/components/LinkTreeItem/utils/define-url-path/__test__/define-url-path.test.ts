import { TypeBoard } from "shared/common/types/AppTypes";
import {
	defineURLPath,
	pathMapping,
} from "shared/components/Drawer/components/Aside/components/LinkTreeItem/utils/define-url-path/define-url-path";

type TestsCases = Array<[TypeBoard | any, string]>;

const TESTS_CASES: TestsCases = Object.entries(pathMapping);

describe("Function defineURLPath", () => {
	test.each(TESTS_CASES)(
		"Should return the correct URL path to %s",
		(slug, expected) => {
			const result = defineURLPath(slug);

			expect(result).toBe(expected);
		}
	);
});
