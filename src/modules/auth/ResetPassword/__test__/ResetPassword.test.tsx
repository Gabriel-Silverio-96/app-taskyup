import { cleanup } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import api from "shared/services/api";
import render from "shared/util/test/render";
import {
	renderRoutePath,
	routePathTest
} from "shared/util/test/renderRoutePath";
import ResetPassword from "../ResetPassword";
import { RESET_PASSWORD_MOCK } from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { token } = RESET_PASSWORD_MOCK;

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

	test("Should match url token with mock token", async () => {
		const history = routePathTest({ route: `/auth/reset-password/${token}` });
		renderRoutePath(<ResetPassword />, {
			path: "/auth/reset-password/:token",
			location: history.location,
			history,
		});
		const tokenURL = history.location.pathname.split("/").at(-1);			
		
		expect(tokenURL).toEqual(token);
	});
});
