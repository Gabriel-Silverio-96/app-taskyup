export interface IDoodleMessage {
	title: string;
	message: string;
	show: boolean;
	image?: React.ReactNode;
	textAlign?: "left" | "center" | "right";
}
