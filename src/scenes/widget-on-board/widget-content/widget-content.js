const NotificationMessage = {
	Fetching: 'Parsing scheme...',
	Failed: 'Failed to parse'
}

window.onload = function() {
	const tPluginDrawControl = document.querySelector('.t-plugin-draw-control')
	const tPluginEditorControl = document.querySelector('.t-plugin-editor__control')

	const apiService = new APIService();

	/** User clicked on "Draw scheme" button  */
	tPluginDrawControl.addEventListener('click', async (e) => {
		const terraformCode = tPluginEditorControl.textContent

		console.warn(terraformCode)

		miro.showNotification(NotificationMessage.Fetching);

		apiService.parse(terraformCode)
			.then((graphs) => {
				miro.board.services.drawGraphs()
			})
			.catch((error) => {
				miro.showErrorNotification(NotificationMessage.Failed);
			})
	});
}

class APIService {
	constructor() {
		this._parse_url = 'https://tf.testmiro.com/parse_test';
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
