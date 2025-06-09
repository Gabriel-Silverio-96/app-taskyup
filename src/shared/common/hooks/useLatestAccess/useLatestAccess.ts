import { useCallback } from "react";
import useLocalStorage from "shared/common/hooks/useLocalStorage";
import { useLocation } from "react-router-dom";
import {
	AddLatestAccess,
	DeleteLatestAccess,
	EditLatestAccess,
	IUseLatestAccess,
	LatestAccess,
} from "shared/common/hooks/useLatestAccess/types";

const useLatestAccess = (): IUseLatestAccess => {
	const location = useLocation();
	const [storage, setStorage] = useLocalStorage<Array<LatestAccess>>(
		"@taskyup.latest_access",
		[]
	);

	const addLatestAccess: AddLatestAccess = useCallback(
		({ id, title, board_id }) => {
			setStorage(prevState => {
				const isStoraged = prevState.some(state => state.id === id);
				if (isStoraged) return prevState;
				const result = [
					{
						id,
						title,
						path: location.pathname + location.search,
						board_id,
					},
					...prevState.slice(0, 3),
				];
				return result;
			});
		},
		[]
	);

	const editLatestAccess: EditLatestAccess = useCallback(({ id, title }) => {
		setStorage(prevState => {
			const isStoraged = prevState.some(state => state.id === id);
			if (isStoraged)
				return prevState.map(state => {
					if (state.id === id) {
						return { ...state, title };
					}

					return state;
				});

			return prevState;
		});
	}, []);

	const deleteLatestAccess: DeleteLatestAccess = useCallback(
		({ id, board_id }) => {
			setStorage(prevState => {
				const removedById = prevState.filter(state => {
					if (id) return state.id !== id;
					if (board_id) return state.board_id !== board_id;

					return prevState;
				});

				return removedById;
			});
		},
		[]
	);

	return { storage, addLatestAccess, deleteLatestAccess, editLatestAccess };
};

export { useLatestAccess };
