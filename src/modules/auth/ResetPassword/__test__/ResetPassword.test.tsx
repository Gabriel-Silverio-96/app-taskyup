import render from "shared/util/test/render";
import {
	renderRoutePath,
	routePathTest
} from "shared/util/test/renderRoutePath";
import ResetPassword from "../ResetPassword";

describe("Component <ResetPassword />", () => {
	test("Should mount the component", () => {
		const { container } = render(<ResetPassword />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = render(<ResetPassword />);
		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test("Should show message invalid token", () => {
		const history = routePathTest({ route: "/auth/reset-password/123456" });
		renderRoutePath(<ResetPassword />, {
			path: "/auth/reset-password/:token",
			location: history.location,
			history,
		});
		const token = history.location.pathname.split("/").at(-1);
		console.log("Test route", token);
	});
});
