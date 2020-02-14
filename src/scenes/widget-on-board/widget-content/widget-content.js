const NotificationMessage = {
	Fetching: 'Parsing scheme...',
	Drawing: 'Drawing scheme...',
	Failed: 'Failed to parse'
}

const host_url = 'https://c098e8ea.ngrok.io/';

/** URL to static (icons, public js modules, etc) */
const static_url = `${host_url}/src/static`;

window.onload = function() {
	const tPluginDrawControl = document.querySelector('.t-plugin-draw-control')
	const tPluginEditorControl = document.querySelector('.t-plugin-editor__control')

	const apiService = new APIService();

	/** User clicked on "Draw scheme" button  */
	tPluginDrawControl.addEventListener('click', async (e) => {
		const terraformCode = tPluginEditorControl.textContent

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
}

/** Graph model */
class Graph {
	constructor(params) {
		this.params = params;
	}
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
			method: 'post',
			cache: 'no-cache',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: content,
			mode: 'cors'
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Request succeeded with JSON response', data);

				return data;
			})
	}
}
