import { QueryClient } from "@tanstack/react-query";

const fifteenMinutesInMs = 1000 * 60* 15;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: fifteenMinutesInMs,
		},
	},
});

export default queryClient;