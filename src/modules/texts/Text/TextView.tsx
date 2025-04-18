import React from "react";
import CardText from "modules/texts/Text/components/CardText";
import { TextContextProvider } from "modules/texts/Text/Context";
import DialogDeleteAllText from "modules/texts/Text/components/Dialogs/DialogDeleteAllTexts";
import DialogDeleteOneText from "modules/texts/Text/components/Dialogs/DialogDeleteOneText";
import HeaderText from "modules/texts/Text/components/HeaderText";
import Templates from "modules/texts/Text/components/Templates";
import Loading from "shared/components/Loading";
import type { ITextView } from "modules/texts/Text/types";

const TextView: React.FC<ITextView> = props => {
	const { data, isFetching } = props;

	if (isFetching) return <Loading isLoading backdrop />;

	return (
		<TextContextProvider>
			<HeaderText count={data?.count} title={data?.title} />
			<Templates />
			<CardText {...{ data }} />
			<DialogDeleteOneText />
			<DialogDeleteAllText />
		</TextContextProvider>
	);
};

export default TextView;
