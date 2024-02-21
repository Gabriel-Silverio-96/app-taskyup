import { IconButton, useTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useQueryClient } from "@tanstack/react-query";
import { CardActionContainer } from "modules/notes/Note/components/CardNote/components/CardAction/style";
import { ICardAction } from "modules/notes/Note/components/CardNote/components/CardAction/types";
import { IFetchGetNotesResponse } from "modules/notes/Note/services/types";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import { FiEye, FiStar, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ICON_SIZE, MENU_QUERY_KEY, NOTE_QUERY_KEY } from "shared/constants";
import api from "shared/services/api";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { updateNoteData } from "../../utils/update-note-data/update-note-data";

const CardAction: React.FC<ICardAction> = ({
	note_id,
	board_id,
	favorite,
	favorite_id,
}) => {
	const queryClient = useQueryClient();
	const { palette } = useTheme();
	const { openDialogDeleteOneNote } = useDialogNote();

	const queryKey = [NOTE_QUERY_KEY.FETCH_GET_NOTES, { variable: board_id }];

	const handleClickFavorite = async () => {
		try {
			const data = {
				related_id: note_id,
				board_id,
				board_type_id: "1f819d7d-11b5-4742-be86-2286ef50b5d5",
			};

			if (favorite) {
				await api.delete(
					`favorite?favorite_id=${favorite_id}&board_id=${board_id}&related_id=${note_id}`
				);
				return;
			}

			await api.post("favorite", data);

			// queryClient.setQueryData<IFetchGetNotesResponse>(
			// 	queryKey,
			// 	oldData => updateNoteData({ oldData, note_id })
			// );
		} catch (error) {
			console.error(error);
		} finally {
			await Promise.all([
				queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]),
				queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
			]);
		}
	};

	const linkToNoteEdit = createURLQueryParams("/note/edit", {
		note_id,
		board_id,
	});

	const definedColorIconFavorite = favorite
		? yellow[500]
		: palette.common.white;

	return (
		<CardActionContainer id="card-action">
			<IconButton onClick={() => openDialogDeleteOneNote(note_id)}>
				<FiTrash color={palette.error.main} size={ICON_SIZE.MEDIUM} />
			</IconButton>

			<IconButton onClick={handleClickFavorite}>
				<FiStar
					color={definedColorIconFavorite}
					size={ICON_SIZE.MEDIUM}
				/>
			</IconButton>

			<Link to={linkToNoteEdit}>
				<IconButton>
					<FiEye size={ICON_SIZE.MEDIUM} />
				</IconButton>
			</Link>
		</CardActionContainer>
	);
};

export default CardAction;
