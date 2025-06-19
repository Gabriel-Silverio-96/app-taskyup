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

const MAX_ITEMS = 3;

const useLatestAccess = (): IUseLatestAccess => {
	const location = useLocation();
	const [storage, setStorage] = useLocalStorage<Array<LatestAccess>>(
		"@taskyup.latest_access",
		[]
	);

	const addLatestAccess: AddLatestAccess = useCallback(
		({ id, title, board_id, board_type }) => {
			setStorage(prevState => {
				const isStoraged = prevState.some(state => state.id === id);
				if (isStoraged) return prevState;

				const path = `${location.pathname}${location.search}`;
				const result = [
					{ id, title, path, board_id, board_type },
					...prevState.slice(0, MAX_ITEMS),
				];

				return result;
			});
		},
		[]
	);

	const editLatestAccess: EditLatestAccess = useCallback(({ id, title }) => {
		setStorage(prevState =>
			prevState.map(state =>
				state.id === id ? { ...state, title } : state
			)
		);
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
