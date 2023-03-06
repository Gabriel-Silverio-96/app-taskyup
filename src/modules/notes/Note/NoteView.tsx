import Loading from "shared/components/Loading";
import CardNote from "./CardNote";
import { ContextProviderNote } from "./Context";
import DialogDeleteAllNotes from "./Dialogs/DialogDeleteAllNotes";
import DialogDeleteSingleNote from "./Dialogs/DialogDeleteSingleNote";
import DialogEditNote from "./Dialogs/DialogEditNote";
import DialogNewNote from "./Dialogs/DialogNewNote";
import HeaderNote from "./HeaderNote";

const NoteView:React.FC<any> = (props) => {
	const { data, isFetching } = props;
	return (
		<ContextProviderNote>		
			<Loading isLoading={isFetching} backdrop />
			<HeaderNote />
			<CardNote data={data} />
			<DialogNewNote />
			<DialogEditNote />
			<DialogDeleteSingleNote />
			<DialogDeleteAllNotes />
		</ContextProviderNote>	
	);
};

export default NoteView;