import React from "react";
import CardText from "modules/texts/Text/components/CardText";
import { ContextProviderText } from "modules/texts/Text/Context";
import DialogDeleteAllText from "modules/texts/Text/components/Dialogs/DialogDeleteAllTexts";
import DialogDeleteOneText from "modules/texts/Text/components/Dialogs/DialogDeleteOneText";
import HeaderText from "modules/texts/Text/components/HeaderText";
import Templates from "modules/texts/Text/components/Templates";
import Loading from "shared/components/Loading";
import { ITextView } from "modules/texts/Text/types";

const TextView: React.FC<ITextView> = props => {
	const { data, isFetching } = props;

	return (
		<ContextProviderText>
			<Loading isLoading={isFetching} backdrop />
			<HeaderText count={data?.count} />
			<Templates />
			<CardText {...{ data }} />
			<DialogDeleteOneText />
			<DialogDeleteAllText />
		</ContextProviderText>
	);
};

export default TextView;
