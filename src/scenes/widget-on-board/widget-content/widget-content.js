miro.onReady(() => {
	miro.addListener('SELECTION_UPDATED', (e) => {
		showStatistics(e.data)
	});
	miro.board.selection.get().then(showStatistics)
});

function showStatistics(selection) {
	console.info('# selection: ', selection);
}

hljs.initHighlightingOnLoad()