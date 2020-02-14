const icon24 = '<path fill="currentColor" fill-rule="nonzero" d="M87.3483423,49.909048 L169.843948,97.0452411 L169.843948,189.637714 L87.3483423,142.501392 L87.3483423,49.909048 L87.3483423,49.909048 Z M174.222231,189.222177 L256,142.226168 L256,50.2322794 L174.222231,96.9051941 L174.222231,189.222177 L174.222231,189.222177 Z M0,92.5923443 L82.4955975,139.728675 L82.4955975,47.1363217 L0,0 L0,92.5923443 L0,92.5923443 Z M87.3483423,240.540449 L169.843948,287.676771 L169.843948,194.761062 L87.3483423,147.62486 L87.3483423,240.540449 L87.3483423,240.540449 Z"/>'
const icon48 = '<path fill="#5B00FF" fill-rule="nonzero" d="M87.3483423,49.909048 L169.843948,97.0452411 L169.843948,189.637714 L87.3483423,142.501392 L87.3483423,49.909048 L87.3483423,49.909048 Z M174.222231,189.222177 L256,142.226168 L256,50.2322794 L174.222231,96.9051941 L174.222231,189.222177 L174.222231,189.222177 Z M0,92.5923443 L82.4955975,139.728675 L82.4955975,47.1363217 L0,0 L0,92.5923443 L0,92.5923443 Z M87.3483423,240.540449 L169.843948,287.676771 L169.843948,194.761062 L87.3483423,147.62486 L87.3483423,240.540449 L87.3483423,240.540449 Z"/>'

function run() {
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: 'Terraform Parser',
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

testCalcGraph();