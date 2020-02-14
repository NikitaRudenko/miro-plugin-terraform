const icon24 = `
<svg  viewBox="0 0 256 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M87.3483423,49.909048 L169.843948,97.0452411 L169.843948,189.637714 L87.3483423,142.501392 L87.3483423,49.909048 L87.3483423,49.909048 Z M174.222231,189.222177 L256,142.226168 L256,50.2322794 L174.222231,96.9051941 L174.222231,189.222177 L174.222231,189.222177 Z M0,92.5923443 L82.4955975,139.728675 L82.4955975,47.1363217 L0,0 L0,92.5923443 L0,92.5923443 Z M87.3483423,240.540449 L169.843948,287.676771 L169.843948,194.761062 L87.3483423,147.62486 L87.3483423,240.540449 L87.3483423,240.540449 Z" fill="currentColor"></path>
    </g>
</svg>
`
const icon48 = '<path fill="#5B00FF" fill-rule="nonzero" d="M11.041 5.688l9.912 5.031v10.073l-9.912-5.037zM22.041 10.719v10.073l9.917-5.037v-10.067zM0.047 0.068v10.068l9.912 5.036v-10.068zM11.041 26.921l9.912 5.037v-10.063l-9.912-5.036z"/>'
function run() {
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: 'Terraform',
				toolbarSvgIcon: icon24,
				librarySvgIcon: icon48,
				onClick: () => {
					miro.board.ui.openLeftSidebar(
						'src/scenes/widget-on-board/widget-content/widget-content.html',
						{
							width: 420
						}
					)
				}
			}
		}
	})
}

miro.onReady(run);

const currentDate = new Date();
console.info(`Hello Miro app by time: ${currentDate.getHours()}:${currentDate.getMinutes()}`);
