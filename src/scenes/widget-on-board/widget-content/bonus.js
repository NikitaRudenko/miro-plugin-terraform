var BONUS = function (api) {
	console.log('SELECTION_UPDATED')
	const info = document.getElementById('info')


	miro.addListener('SELECTION_UPDATED', (event) => {
		console.log('event', event)
		if (event.data.length === 0) {
			info.classList.add('hide')
		}

		if (event.data.length  === 1) {
			api.getInfo('c5.12xlarge', 'eu-west-2').then(responce => {
				console.log('responce',responce)
				let res = responce.json()

				console.log('res',res)
				info.classList.remove('hide')

			})
		}

	})
}
