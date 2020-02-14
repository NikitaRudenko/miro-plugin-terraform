var BONUS = function (api) {
	console.log('SELECTION_UPDATED')
	const info = document.getElementById('info')


	miro.addListener('SELECTION_UPDATED', (event) => {
		console.log('event', event)
		if (event.data.length === 0) {
			info.classList.add('hide')
		}

		if (event.data.length  === 1) {
			let {instance_type,availability_zone } = event.data[0].metadata[METADATA_KEY]

			if (instance_type && availability_zone) {

				api.getInfo(instance_type, availability_zone).then(data => {
					console.log('responce',data)
					if (data.description) {
						let tmpl = getTable('info',data)
						info.innerHTML = tmpl
						info.classList.remove('hide')
					}
				})

			}
		}

	})
}

/**
<!---
id: "4SR9RFRBXHFABJMA"
vcpu: "48"
memory: "96 GiB"
clockSpeed: "3.0 GHz"
operatingSystem: "Linux"
price: 2.583
unit: "Hrs"
physicalProcessor: "Intel Xeon Platinum 8275L"
description: "$2.583 per Dedicated Linux c5.12xlarge Instance Hour
 ***/
function getTable(title, {memory,clockSpeed,operatingSystem,price,description,physicalProcessor}) {
	return `
	<h3>info</h3>
<p class="miro-p-large" style="padding-bottom: 10px">
 ${description}
</p>
<table>
 <tr>
  <th>
   Processor
  </th>
  <td>
   ${physicalProcessor}
  </td>
 </tr>
 <tr>
  <th>
   OS
  </th>
  <td>
   ${operatingSystem}
  </td>
 </tr>
 <tr>
  <th>
   Clock speed
  </th>
  <td>
   ${clockSpeed}
  </td>
 </tr>
 <tr>
  <th>
   Memory
  </th>
  <td>
   ${memory}
  </td>
 </tr>
 <tr>
  <th>
   Price
  </th>
  <td>
   $${price}
  </td>
 </tr>
</table>`



}
