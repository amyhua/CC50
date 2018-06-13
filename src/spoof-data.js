const filmmakerData = [{
	id: 1111,
	itemType: 'filmmaker',
	title: 'Barbara Hammer has a very long name here',
	description: `Barbara Hammer is a visual artist primarily working in film and video. Her work reveals and celebrates marginalized peoples whose stories have not been told. Her cinema is multi-leveled and engages an audience viscerally and intellectually with the goal of activating them to make social change. She has been honored with 5 retrospectives in the last 3 years: The Museum of Modern Art in New York City, Tate Modern in London, Jeu de Paume in Paris, the Toronto International Film Festival and Kunsthalle Oslo in Norway. Her book Hammer! Making Movies Out of Sex and Life was published in 2010 by The Feminist Press at The City University of New York. 

She is most well-known for making the first explicit lesbian film in 1974, Dyketactics, and for her trilogy of documentary film essays on queer history Nitrate Kisses (1992), Tender Fictions (1995), History Lessons, (2000). 

She teaches at The European Graduate School in Saas-Fee, Switzerland. Her work is represented by the gallery KOW in Berlin, Germany. Company (formerly Capricious88) will exhibit her drawings and paintings in a one-woman show in NYC opening September 11, 2015.

Welcome To This House, her new feature documentary on the poet Elizabeth Bishop, was funded by a Guggenheim Fellowship (2013-14) Welcome To This House premieres at The Museum of Fine Art, Boston and The Museum of Modern Art, New York, 2015.

Barbara Hammer lives and works in New York City and Kerhonkson, New York.`,
	avatar: null
}, {
	id: 1299,
	itemType: 'filmmaker',
	title: 'Barbara Hammer 2',
	films: [{
		id: 1232,
		itemType: 'film',
		title: 'Dyketactics',
		description: `A popular lesbian "commercial" 110 images of sensual touching montages in A, B, C, D rolls of "kinaesthetic" editing.
		\n"The images are varied and very quickly presented in the early part of the film, introducing the characters, if you will. The second half of the film slows down measurably and all of a sudden I found myself holding my breath as I watched the images of love-making sensually and artistically captured."
		\n- Elizabeth Lay, Plexus`,
		format: '16mm',
		years: '1970s',
		image: 'Color',
		sound: 'Sound',
		tags: ['16mm', '1970s', 'Color', 'Sound'],
		creator: {
			displayName: 'Barbara Hammer',
			id: 1111
		},
		year: '1974'
	}]
}];

const programData = [{
	id: 1232,
	itemType: 'program',
	title: 'Between Pop Culture and the Avant-Garde: Little-Seen Thing that has ever seen!',
	description: 'Between Pop Culture and the Avant-Garde: Little-Seen Films by Women from the Collection of Canyon Cinema. Ranging from...',
	photos: [
		'https://placeimg.com/640/480/any',
		'https://placeimg.com/940/480/any',
		'https://placeimg.com/340/480/any',
		'https://placeimg.com/740/480/any',
		'https://placeimg.com/840/480/any',
		'https://placeimg.com/240/480/any',
		'https://placeimg.com/140/480/any',
	],
	filmmakers: [{
		id: 234,
		name: 'Coni Beeson'
	}, {
		id: 234,
		name: 'Dana Plays'
	}, {
		id: 234,
		name: 'Alice Anne Parker Severson'
	}, {
		id: 234,
		name: 'Elizabeth Sherry'
	}, {
		id: 234,
		name: 'Bob Smithy Jonesy'
	}]
}, {
	id: 1233,
	itemType: 'program',
	title: 'Between Pop Culture and the Avant-Garde: Little-Seen Thing that has ever seen!',
	description: 'Between Pop Culture and the Avant-Garde: Little-Seen Films by Women from the Collection of Canyon Cinema. Ranging from...',
	photos: [
		'https://placeimg.com/640/480/any'
	]
}];

const filmData = [{
		id: 1239,
		itemType: 'film',
		title: 'Vital Signs',
		description: 'This film is dedicated to John Wilbert Hammer, Curt McDowell and Vito Russo.',
		format: '16mm',
		years: '1990s',
		image: 'Color',
		sound: 'Silent'
	}, {
	id: 1232,
	itemType: 'film',
	title: 'Dyketactics',
	description: `A popular lesbian "commercial" 110 images of sensual touching montages in A, B, C, D rolls of "kinaesthetic" editing.
	\n"The images are varied and very quickly presented in the early part of the film, introducing the characters, if you will. The second half of the film slows down measurably and all of a sudden I found myself holding my breath as I watched the images of love-making sensually and artistically captured."
	\n- Elizabeth Lay, Plexus`,
	format: '16mm',
	years: '1970s',
	image: 'Color',
	sound: 'Sound',
	tags: ['16mm', '1970s', 'Color', 'Sound'],
	creator: {
		displayName: 'Barbara Hammer',
		id: 1111
	},
	year: '1974',
	filmmaker: {
		id: 1111,
		itemType: 'filmmaker',
		title: 'Madam Luxome Barbara Hammer Super Jr the Third of Florence',
		description: `Barbara Hammer is a visual artist primarily working in film and video. Her work reveals and celebrates marginalized peoples whose stories have not been told. Her cinema is multi-leveled and engages an audience viscerally and intellectually with the goal of activating them to make social change. She has been honored with 5 retrospectives in the last 3 years: The Museum of Modern Art in New York City, Tate Modern in London, Jeu de Paume in Paris, the Toronto International Film Festival and Kunsthalle Oslo in Norway. Her book Hammer! Making Movies Out of Sex and Life was published in 2010 by The Feminist Press at The City University of New York. 

She is most well-known for making the first explicit lesbian film in 1974, Dyketactics, and for her trilogy of documentary film essays on queer history Nitrate Kisses (1992), Tender Fictions (1995), History Lessons, (2000). 

She teaches at The European Graduate School in Saas-Fee, Switzerland. Her work is represented by the gallery KOW in Berlin, Germany. Company (formerly Capricious88) will exhibit her drawings and paintings in a one-woman show in NYC opening September 11, 2015.

Welcome To This House, her new feature documentary on the poet Elizabeth Bishop, was funded by a Guggenheim Fellowship (2013-14) Welcome To This House premieres at The Museum of Fine Art, Boston and The Museum of Modern Art, New York, 2015.

Barbara Hammer lives and works in New York City and Kerhonkson, New York.`,
		avatar: null,
		films: [{
			id: 1232,
			itemType: 'film',
			title: 'Dyketactics',
			description: `A popular lesbian "commercial" 110 images of sensual touching montages in A, B, C, D rolls of "kinaesthetic" editing.
			\n"The images are varied and very quickly presented in the early part of the film, introducing the characters, if you will. The second half of the film slows down measurably and all of a sudden I found myself holding my breath as I watched the images of love-making sensually and artistically captured."
			\n- Elizabeth Lay, Plexus`,
			format: '16mm',
			years: '1970s',
			image: 'Color',
			sound: 'Sound',
			tags: ['16mm', '1970s', 'Color', 'Sound'],
			creator: {
				id: 1111,
				displayName: 'Barbara Hammer'
			},
			year: '1974',
		}, {
			id: 1239,
			itemType: 'film',
			title: 'Vital Signs',
			description: 'This film is dedicated to John Wilbert Hammer, Curt McDowell and Vito Russo.',
			format: '16mm',
			years: '1990s',
			image: 'Color',
			sound: 'Silent'
		}]
	}
}, {
	id: 1233,
	itemType: 'film',
	title: 'Dyketactics 2 and some very long long long long long long title goes here and here and here and here',
	tags: ['16mm', '1970s', 'Color', 'Sound', '16mm', '16mm', '16mm', '16mm', '16mm', '16mm'],
	creator: 'Barbara Hammer Barbara Hammer Barbara Hammer Barbara Hammer Barbara Hammer Barbara Hammer',
	year: '1974'
}];

const ephemeraData = [{
	id: 1232,
	itemType: 'ephemera',
	title: 'Michael Wallin Remembered Ephemera Titles have a Maximum of Three Lines Even If It OverFlows to a Fourth Line',
	photos: [],
	tags: ['Printed Pieces'],
	related: [{
		id: 32,
		title: 'Barbara Hammer',
		itemType: 'filmmaker'
	}, {
		id: 64,
		title: 'Michael Wallin',
		itemType: 'filmmaker'
	}, {
		id: 32,
		title: 'Karry Fisher',
		itemType: 'filmmaker'
	}, {
		id: 64,
		title: 'Wes Andersen',
		itemType: 'filmmaker'
	}]
}, {
	id: 1244,
	itemType: 'ephemera',
	title: 'Michael Wallin Remembered Ephemera Titles have a Maximum of Three Lines Even If It OverFlows to a Fourth Line',
	photos: [],
	tags: ['Printed Pieces']
}];

export function getSpoofDataObj(searchVal, id) {
	const findById = x => String(x.id) === String(id);
	switch (searchVal) {
		case 'films':
			return filmData.find(findById);
		case 'filmmakers':
			return filmmakerData.find(findById);
		case 'programs':
			return programData.find(findById);
		case 'ephemera':
			return ephemeraData.find(findById);
	}
};

export function getSpoofDataList(items) {
	if (items === 'films') {
		return filmData;
	} else if (items === 'filmmakers') {
		return filmmakerData;
	} else if (items === 'programs') {
		return programData;
	} else if (items === 'ephemera') {
		return ephemeraData;
	}
};

