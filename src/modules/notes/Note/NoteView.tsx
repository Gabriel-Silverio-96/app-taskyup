import Loading from "shared/components/Loading";
import { ContextProviderNote } from "modules/notes/Note/Context";
import CardNote from "modules/notes/Note/components/CardNote";
import DialogDeleteAllNotes from "modules/notes/Note/components/Dialogs/DialogDeleteAllNotes";
import DialogDeleteOneNote from "modules/notes/Note/components/Dialogs/DialogDeleteOneNote";
import HeaderNote from "modules/notes/Note/components/HeaderNote";
import DoodleMessage from "shared/components/DoodleMessage";
import { INoteView } from "modules/notes/Note/types";

const NoteView: React.FC<INoteView> = props => {
	const { data, isFetching, isShowDoodleMessage } = props;

	if (isFetching) return <Loading isLoading backdrop />;

	return (
		<ContextProviderNote>
			<HeaderNote count={data?.count} title={data?.title} />
			<DoodleMessage
				title="You have not created any notes"
				message="Create a note 😊"
				show={isShowDoodleMessage}
			/>
			<CardNote {...{ data, isFetching }} />
			<DialogDeleteOneNote />
			<DialogDeleteAllNotes />
		</ContextProviderNote>
	);
};

export default NoteView;
