const EmojiDisplay = ({ src }: { src: string }) => {
	if (src) {
		return (
			<img
				src={src}
				width={20}
				height={20}
				style={{ verticalAlign: "middle" }}
				loading="lazy"
				alt="Emoji"
			/>
		);
	}

	return null;
};

export default EmojiDisplay;
