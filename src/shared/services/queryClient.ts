import { QueryClient } from "@tanstack/react-query";

const fiveMinutesInMs = 1000 * 60 * 5;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: fiveMinutesInMs,
			retry: false
		},
	},
});

export default queryClient;