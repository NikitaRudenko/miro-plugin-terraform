window.onload = function() {
	const tPluginDrawControl = document.querySelector('.t-plugin-draw-control')
	const tPluginEditorControl = document.querySelector('code.terraform')

	const apiService = new APIService();

	/** User clicked on "Draw scheme" button  */
	tPluginDrawControl.addEventListener('click', async (e) => {
		const terraformCode = tPluginEditorControl.textContent

		console.warn(terraformCode)

		const plainJSON = await apiService.parse(terraformCode)
	});
}

class APIService {
	constructor() {
		this._parse_url = 'http://52.210.137.238:5000/parse';
	}

	/** Request parse terraform code to the plain JSON */
	parse(terraformCode) {
		return fetch(this._parse_url, {
			method: 'post',
			headers: {
				"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
			},
			body: terraformCode
		})
			.then(function (data) {
				console.log('Request succeeded with JSON response', data);
			})
			.catch(function (error) {
				console.log('Request failed', error);
			});
	}
}
