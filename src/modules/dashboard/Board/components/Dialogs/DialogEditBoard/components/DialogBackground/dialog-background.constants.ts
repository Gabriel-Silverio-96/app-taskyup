export const INITIAL_STATE_IMAGES = {
	per_page: 3,
	total_results: 3,
	photos: [
		{
			id: 1,
			src: {
				tiny: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			},
			photographer: "Lum3n",
			photographer_url: "https://www.pexels.com/pt-br/@lum3n-44775/",
			alt: "Free Closeup Photo of Brown and Black Dog Face Stock Photo",
		},
		{
			id: 2,
			src: {
				tiny: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg??auto=compress&cs=tinysrgb&w=500&lazy=load",
			},
			photographer: "Felix Mittermeier",
			photographer_url: "https://www.pexels.com/@felixmittermeier/",
			alt: "Free Worms Eyeview of Green Trees Stock Photo",
		},
		{
			id: 3,
			src: {
				tiny: "https://images.pexels.com/photos/273217/pexels-photo-273217.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1",
			},
			photographer: "Pixabay",
			photographer_url: "https://www.pexels.com/@pixabay/",
			alt: "Free Low-angle Photography of Concrete Buildings Stock Photo",
		},
	],
};

export const ERROR_STATE_IMAGES = {
	per_page: 0,
	total_results: 0,
	photos: [],
	error: "Service unavailable, please try again later",
};
