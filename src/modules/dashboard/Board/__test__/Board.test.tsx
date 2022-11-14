import { cleanup } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import api from "shared/services/api";
import renderRequiredAuth from "shared/util/test/renderRequiredAuth";
import Board from "../Board";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

describe("Component <Board />", () => {
	test("Should mount the component", () => {
		const { container } = renderRequiredAuth(<Board />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = renderRequiredAuth(<Board />);
		unmount();
		expect(container).toBeEmptyDOMElement();
	});	
});
