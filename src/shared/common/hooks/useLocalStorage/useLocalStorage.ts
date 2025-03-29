import { useEffect, useState } from "react";
import { UseLocalStorage } from "shared/common/hooks/useLocalStorage/types/UseLocalStorage.types";

const useLocalStorage = <T>(
	key: string,
	initialState?: T
): UseLocalStorage<T> => {
	const [state, setState] = useState(() => {
		const storage = localStorage.getItem(key);

		if (storage) {
			return JSON.parse(storage);
		} else {
			return initialState;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
};

export default useLocalStorage;
