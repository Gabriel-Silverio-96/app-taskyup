import { QueryClient } from "@tanstack/react-query";

const ONE_HOUR_IN_MILLISECOND = 1000 * 60 * 60;
const ONE_SECOND = 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: ONE_HOUR_IN_MILLISECOND,
			cacheTime: ONE_HOUR_IN_MILLISECOND,
			retry: 3,	
			retryDelay: ONE_SECOND 		
		},
	},
});

export default queryClient;