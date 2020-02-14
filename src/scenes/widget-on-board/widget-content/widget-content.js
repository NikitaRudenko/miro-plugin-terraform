const NotificationMessage = {
	Fetching: 'Parsing scheme...',
	Drawing: 'Drawing scheme...',
	Failed: 'Failed to parse'
}

const host_url = 'https://bbd1e543.ngrok.io/';

/** URL to static (icons, public js modules, etc) */
const static_url = `${host_url}/src/static`;

window.onload = function() {
	const tPluginDrawControl = document.querySelector('.t-plugin-draw-control')

	const apiService = new APIService();

	/** User clicked on "Draw scheme" button  */
	tPluginDrawControl.addEventListener('click', async (e) => {
		const terraformCode = editor.getValue();
		miro.showNotification(NotificationMessage.Fetching);

		apiService.parse(terraformCode)
			.then((response) => {
				miro.showNotification(NotificationMessage.Drawing);

				return response.graphs[0];
			})
			.then((graph) => {
				GraphDrawer.create(graph).render(graph)
			})
			.catch((error) => {
				console.log(error)
				miro.showErrorNotification(NotificationMessage.Failed);
			})
	});

	// console.log(miro)
	setTimeout(function() {
		BONUS(apiService , miro)
	}, 100)
}


const APIConfig = {
	method: 'post',
	cache: 'no-cache',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	mode: 'cors',
}

class APIService {
	constructor() {
		this._parse_url = 'https://tf.testmiro.com/parse';
	}

	/** Request parse terraform code to the plain JSON */
	parse(terraformCode) {
		const content = JSON.stringify({
			data: terraformCode
		});

		return fetch(this._parse_url, {
			...APIConfig,
			body: content,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Request succeeded with JSON response', data);

				return data;
			})
	}


	getInfo(instanceType, region) {
		console.log('BONUS ', instanceType, region)

		return fetch(`https://tf.testmiro.com/get_props?instanceType=${instanceType}&region=${region}`,{
			cache: 'no-cache',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			method: 'get'
		}).catch((e) => console.error(e))
			// .then(responce => console.log(responce.json()))

	}
}
