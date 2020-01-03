const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [
				{
					name: "Palpatine",
					height: "170",
					mass: "75",
					hair_color: "grey",
					skin_color: "pale",
					eye_color: "yellow",
					birth_year: "82BBY",
					gender: "male",
					homeworld: "https://swapi.co/api/planets/8/",
					films: [
						"https://swapi.co/api/films/2/",
						"https://swapi.co/api/films/5/",
						"https://swapi.co/api/films/4/",
						"https://swapi.co/api/films/6/",
						"https://swapi.co/api/films/3/"
					],
					species: ["https://swapi.co/api/species/1/"],
					vehicles: [],
					starships: [],
					created: "2014-12-15T12:48:05.971000Z",
					edited: "2014-12-20T21:17:50.347000Z",
					url: "https://swapi.co/api/people/21/"
				},
				{
					name: "Luke Skywalker",
					height: "172",
					mass: "77",
					hair_color: "blond",
					skin_color: "fair",
					eye_color: "blue",
					birth_year: "19BBY",
					gender: "male",
					homeworld: "https://swapi.co/api/planets/1/",
					films: [
						"https://swapi.co/api/films/2/",
						"https://swapi.co/api/films/6/",
						"https://swapi.co/api/films/3/",
						"https://swapi.co/api/films/1/",
						"https://swapi.co/api/films/7/"
					],
					species: ["https://swapi.co/api/species/1/"],
					vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"],
					starships: ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
					created: "2014-12-09T13:50:51.644000Z",
					edited: "2014-12-20T21:17:56.891000Z",
					url: "https://swapi.co/api/people/1/"
				}
			],

			vehicles: [
				{
					name: "Sand Crawler",
					model: "Digger Crawler",
					manufacturer: "Corellia Mining Corporation",
					cost_in_credits: "150000",
					length: "36.8",
					max_atmosphering_speed: "30",
					crew: "46",
					passengers: "30",
					cargo_capacity: "50000",
					consumables: "2 months",
					vehicle_class: "wheeled",
					pilots: [],
					films: ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
					created: "2014-12-10T15:36:25.724000Z",
					edited: "2014-12-22T18:21:15.523587Z",
					url: "https://swapi.co/api/vehicles/4/"
				},
				{
					name: "T-16 skyhopper",
					model: "T-16 skyhopper",
					manufacturer: "Incom Corporation",
					cost_in_credits: "14500",
					length: "10.4",
					max_atmosphering_speed: "1200",
					crew: "1",
					passengers: "1",
					cargo_capacity: "50",
					consumables: "0",
					vehicle_class: "repulsorcraft",
					pilots: [],
					films: ["https://swapi.co/api/films/1/"],
					created: "2014-12-10T16:01:52.434000Z",
					edited: "2014-12-22T18:21:15.552614Z",
					url: "https://swapi.co/api/vehicles/6/"
				},
				{
					name: "X-34 landspeeder",
					model: "X-34 landspeeder",
					manufacturer: "SoroSuub Corporation",
					cost_in_credits: "10550",
					length: "3.4",
					max_atmosphering_speed: "250",
					crew: "1",
					passengers: "1",
					cargo_capacity: "5",
					consumables: "unknown",
					vehicle_class: "repulsorcraft",
					pilots: [],
					films: ["https://swapi.co/api/films/1/"],
					created: "2014-12-10T16:13:52.586000Z",
					edited: "2014-12-22T18:21:15.583700Z",
					url: "https://swapi.co/api/vehicles/7/"
				}
			],
			planets: [
				{
					name: "Alderaan",
					rotation_period: "24",
					orbital_period: "364",
					diameter: "12500",
					climate: "temperate",
					gravity: "1 standard",
					terrain: "grasslands, mountains",
					surface_water: "40",
					population: "2000000000",
					residents: [
						"https://swapi.co/api/people/5/",
						"https://swapi.co/api/people/68/",
						"https://swapi.co/api/people/81/"
					],
					films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
					created: "2014-12-10T11:35:48.479000Z",
					edited: "2014-12-20T20:58:18.420000Z",
					url: "https://swapi.co/api/planets/2/"
				},
				{
					name: "Yavin IV",
					rotation_period: "24",
					orbital_period: "4818",
					diameter: "10200",
					climate: "temperate, tropical",
					gravity: "1 standard",
					terrain: "jungle, rainforests",
					surface_water: "8",
					population: "1000",
					residents: [],
					films: ["https://swapi.co/api/films/1/"],
					created: "2014-12-10T11:37:19.144000Z",
					edited: "2014-12-20T20:58:18.421000Z",
					url: "https://swapi.co/api/planets/3/"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getPeople: () => {
				getActions().getFech("people", "https://swapi.co/api/people/");
			},
			getPlanets: () => {
				console.log("getPlanets");
				getActions().getFech("planets", "https://swapi.co/api/planets/");
			},
			getVehicles: () => {
				console.log("getVehicles");
				getActions().getFech("vehicles", "https://swapi.co/api/vehicles/");
			},

			getFech: (character, url) => {
				console.log("getCharacter");
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ [character]: data }));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
