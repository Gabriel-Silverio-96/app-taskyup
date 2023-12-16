import { GridColDef } from "@mui/x-data-grid";
import GetActionsTableDialogSearchAll from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/components/GetActionsTableDialogSearchAll";

export const columns: GridColDef[] = [
	{ field: "title", headerName: "Title", width: 250 },
	{ field: "title_board", headerName: "Board name", width: 350 },
	{ field: "type_board", headerName: "Type Board", width: 100 },
	{
		field: "actions",
		type: "actions",
		getActions: GetActionsTableDialogSearchAll,
	},
];
