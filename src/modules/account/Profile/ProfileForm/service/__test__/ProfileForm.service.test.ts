import MockAdapter from "axios-mock-adapter";
import { fetchGetProfileService } from "../ProfileForm.service";
import api from "shared/services/api";
import { FETCH_GET_PROFILE_RESPONSE_MOCK } from "./mock/ProfileForm.service.mock";
import { cleanup } from "@testing-library/react";

const URL = "auth/account";
const mock = new MockAdapter(api);

beforeAll(() => mock.reset());
afterEach(cleanup);
afterAll(() => mock.restore());

describe("fetchGetProfileService", () => {
	test("Should return method GET", async () => {		
		mock.onGet(URL).reply(200, FETCH_GET_PROFILE_RESPONSE_MOCK);
		await fetchGetProfileService();       				
		
		const [ intercept ] = mock.history.get;
		const { method } = intercept;
		
		expect(method).toBe("get");
	});

	test("Should make request at correct URL", async () => {		
		mock.onGet(URL).reply(200, FETCH_GET_PROFILE_RESPONSE_MOCK);
		await fetchGetProfileService();       				
		
		const [ intercept ] = mock.history.get;
		const { url } = intercept;
		
		expect(url).toBe(URL);
	});

	test("Should return profile data", async () => {
		mock.onGet(URL).reply(200, FETCH_GET_PROFILE_RESPONSE_MOCK);
		const response = await fetchGetProfileService();       		

		expect(response).toEqual(FETCH_GET_PROFILE_RESPONSE_MOCK);	
	});
});
