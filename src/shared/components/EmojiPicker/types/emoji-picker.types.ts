import { MouseDownEvent } from "emoji-picker-react/dist/config/config";
import { FunctionReturnsVoid } from "shared/common/types";

export interface IEmojiPicker {
	onEmojiClick: MouseDownEvent;
	emojiUrl: string;
	onEmojiRemove: FunctionReturnsVoid;
}
