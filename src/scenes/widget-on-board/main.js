const icon24 = '<path fill="currentColor" fill-rule="nonzero" d="M11.041 5.688l9.912 5.031v10.073l-9.912-5.037zM22.041 10.719v10.073l9.917-5.037v-10.067zM0.047 0.068v10.068l9.912 5.036v-10.068zM11.041 26.921l9.912 5.037v-10.063l-9.912-5.036z"/>'
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
