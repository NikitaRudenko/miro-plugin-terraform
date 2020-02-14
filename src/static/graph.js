var OFFSET_X = 300;
var OFFSET_Y = 150;

function testCalcGraph() {
	var graph = Object.assign(JSON_TEST)
	calcGraph(graph, 0, 0)

	return graph
}

function calcGraph(graph, centerX, centerY) {
	var startNode = calcLinks(graph);
	var stack = [];
	calcDepth(startNode, stack, 0);
	var maxDepth = 0;
	graph.nodes.forEach(function (node) {
		if (maxDepth < node.depth) {
			maxDepth = node.depth;
		}
	});
	var startLeft = centerX - OFFSET_X * (maxDepth / 2);
	var startTop = centerY - OFFSET_Y * (startNode.size / 2);
	calcPositions(startLeft, startTop, startNode, stack, 0);
};

function calcLinks(graph) {
	var nodes = [];
	Object.keys(graph.nodes).forEach(function (id) {
		nodes.push(Object.assign({id: id}, graph.nodes[id]));
	});
	graph.nodes = nodes;


	var nodesMap = {};
	graph.links = [];
	graph.nodes.forEach(function (node) {
		node.srcLinks = [];
		node.dstLinks = [];
		node.depth = 0;
		nodesMap[node.id] = node;
	});
	graph.edges.forEach(function (edge) {
		var source = nodesMap[edge.source];
		var target = nodesMap[edge.target];
		var nodeLink = {};
		nodeLink.srcNode = source;
		nodeLink.dstNode = target;
		nodeLink.main = false;
		source.dstLinks.push(nodeLink);
		target.srcLinks.push(nodeLink);
		graph.links.push(nodeLink);
	});

	var rootNodes = [];
	graph.nodes.forEach(function (node) {
		if (node.srcLinks.length == 0) {
			rootNodes.push(node);
		}
	});

	var startNode = {};
	startNode.id = 'start';
	startNode.label = 'Start';
	startNode.metadata = 'Metadata';
	startNode.srcLinks = [];
	startNode.dstLinks = [];
	startNode.depth = 0;
	rootNodes.forEach(function (rootNode) {
		var nodeLink = {};
		nodeLink.srcNode = startNode;
		nodeLink.dstNode = rootNode;
		nodeLink.main = false;
		startNode.dstLinks.push(nodeLink);
		rootNode.srcLinks.push(nodeLink);
	});
	graph.nodes.forEach(function (node) {
		if (node.srcLinks.length > 0) {
			node.srcLinks[0].main = true;
		}
	});
	return startNode;
};

function calcDepth(node, stack, depth) {
	if (stack.includes(node)) {
		return;
	}
	stack.push(node);
	node.depth = depth;
	var size = 0;
	node.dstLinks.forEach(function (link) {
		if (link.main) {
			calcDepth(link.dstNode, stack, depth + 1);
			size = size + link.dstNode.size;
		}
	});
	if (size == 0) {
		node.size = 1;
	} else {
		node.size = size;
	}
	stack.pop();
};

function calcPositions(startLeft, startTop, node, stack, top) {
	if (stack.includes(node)) {
		return;
	}
	stack.push(node);
	node.x = startLeft + node.depth * OFFSET_X;
	node.y = startTop + (top + node.size / 2) * OFFSET_Y;
	node.dstLinks.forEach(function (link) {
		if (link.main) {
			calcPositions(startLeft, startTop, link.dstNode, stack, top);
			top = top + link.dstNode.size;
		}
	});
	stack.pop();
};