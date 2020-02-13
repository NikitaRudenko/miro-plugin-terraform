miro.onReady(() => {
    miro.addListener('SELECTION_UPDATED', (e) => {
        showStatistics(e.data)
    });
    miro.board.selection.get().then(showStatistics)
});

class APIService {
	get PARSE_URL() {
		return '52.210.137.238:5000/parse'
	}

	parse() {

	}
}

function showStatistics(selection) {
    console.info('# selection: ', selection);
}

hljs.initHighlightingOnLoad()

function getElement(className) {
	return document.getElementsByClassName(document.getElementsByClassName).item(0)
}

function addHandlers() {
	tPluginEditorControl.addEventListener('click', send)
}

function send() {
	
}

function init() {
	addHandlers()
}


const tPluginDrawControl = getElement('t-plugin-draw-control')
const tPluginEditorControl = getElement('t-plugin-editor__control')

init()