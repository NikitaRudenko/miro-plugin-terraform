window.onload = function() {
	const tPluginDrawControl = document.querySelector('.t-plugin-draw-control')
	const tPluginEditorControl = document.querySelector('code.terraform')

	/** User clicked on "Draw scheme" button  */
	tPluginDrawControl.addEventListener('click', (e) => {
		const terraformCode = tPluginEditorControl.textContent

		console.warn(terraformCode)
	});
}

class APIService {
	constructor() {
		this._parse_url = '52.210.137.238:5000/parse';
	}

	/** Request parse terraform code to the plain JSON */
	parse() {

	}
}
