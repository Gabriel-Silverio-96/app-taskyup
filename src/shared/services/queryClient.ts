import { QueryClient } from "@tanstack/react-query";

const fiveMinutesInMs = 1000 * 60 * 5;
const oneSecondInMs = 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: fiveMinutesInMs,
			retry: 3,	
			retryDelay: oneSecondInMs 		
		},
	},
});

export default queryClient;