import { IconButton, useTheme } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { CardActionContainer } from "modules/notes/Note/components/CardNote/components/CardAction/card-note-action.style";
import type { ICardAction } from "modules/notes/Note/components/CardNote/components/CardAction/types";
import { updateNoteFavoriteCache } from "modules/notes/Note/components/CardNote/components/CardAction/utils";
import { useDialogNote } from "modules/notes/Note/shared/hooks/useDialogNote";
import { FiEye, FiStar, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BOARD_TYPE_ID, ICON_SIZE, MENU_QUERY_KEY } from "shared/constants";
import {
	fetchDeleteFavoriteService,
	fetchPostFavoriteService,
} from "shared/services";
import { createURLQueryParams } from "shared/utils/create-url-query-params";

const CardAction: React.FC<ICardAction> = ({
	note_id,
	board_id,
	favorite_id,
	favorite,
}) => {
	const queryClient = useQueryClient();
	const { palette } = useTheme();

	const { openDialogDeleteOneNote } = useDialogNote();

	const linkToNoteEdit = createURLQueryParams("/note/edit", {
		note_id,
		board_id,
	});

	const handleClickFavorite = async () => {
		let favoriteId: string | undefined;
		try {
			if (favorite) {
				const params = { favorite_id, board_id, related_id: note_id };
				await fetchDeleteFavoriteService({ params });
				return;
			}

			const body = {
				related_id: note_id,
				board_id,
				board_type_id: BOARD_TYPE_ID.NOTES_BOARD_TYPE_ID,
			};

			const { data } = await fetchPostFavoriteService({ body });

			favoriteId = data.results.favorite_id;
		} catch (error) {
		} finally {
			updateNoteFavoriteCache({
				board_id,
				favorite_id: favoriteId,
				note_id,
				queryClient,
			});

			await queryClient.invalidateQueries([
				MENU_QUERY_KEY.FETCH_GET_MENU,
			]);
		}
	};

	const defineIconColor = favorite
		? palette.secondary.main
		: palette.common.white;

	return (
		<CardActionContainer id="card-action">
			<IconButton onClick={() => openDialogDeleteOneNote(note_id)}>
				<FiTrash color={palette.error.main} size={ICON_SIZE.MEDIUM} />
			</IconButton>
			<IconButton onClick={handleClickFavorite}>
				<FiStar color={defineIconColor} size={ICON_SIZE.MEDIUM} />
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
