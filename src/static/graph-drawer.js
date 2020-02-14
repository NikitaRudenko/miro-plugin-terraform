(function(global) {

    const METADATA_KEY = '3074457345621854627'

    const NodeType = {
        /** Mapped to image "Elastic Instance" */
        AwsLib: 'aws_lb',
        AwsListener: 'aws_lb_listener',

        /** Mapped to image "EC2 Instance Container" */
        AwsInstance: 'aws_lb_instance',
        AwsGroup: 'aws_lb_target_group'
    }

    const NODE_TYPE_IMAGE_MAP = {
        [NodeType.AwsLib]: 'elastic-load-balancing_view-light.svg',
        [NodeType.AwsListener]: 'elastic-load-balancing_view-light.svg',
        [NodeType.AwsInstance]: 'ec2-instance-container.svg',
        [NodeType.AwsGroup]: 'ec2-instance-container.svg'
    }

    const DEFAULT_NODE_TYPE = NodeType.AwsInstance;

    class GraphDrawer {
        constructor(graph) {
            this._graph = graph
            calcGraph(this._graph, 0, 0)
        }


        _renderNodes() {
            const widgetsToCreate = this._graph.nodes.map((node) => {
                const imageName = NODE_TYPE_IMAGE_MAP[node.type] || NODE_TYPE_IMAGE_MAP[DEFAULT_NODE_TYPE]

                return {
                    type: 'image',
                    url: `${static_url}/icons/${imageName}`,
                    metadata: {
                        [METADATA_KEY]: {
                            nodeId: node.id
                        }
                    },
                    x: node.x,
                    y: node.y
                }
            });

            return miro.board.widgets.create(widgetsToCreate)
                .then((widgets) => {
                    console.log(widgets)
                    return widgets.reduce((acc, widget) => {
                        acc[widget.metadata[METADATA_KEY].nodeId] = widget

                        return acc
                    }, {})
                })
        }

        _renderLinks(nodeIdWidgetMap) {
            const links = this._graph.links.map((link) => ({
                type: 'line',
                startWidgetId: nodeIdWidgetMap[link.srcNode.id].id,
                endWidgetId: nodeIdWidgetMap[link.dstNode.id].id
            }))

            return miro.board.widgets.create(links)
        }

        render() {
            this._renderNodes()
                .then((nodeIdWidgetMap) => {
                    this._renderLinks(nodeIdWidgetMap)
                })
        }
    }

    global['GraphDrawer'] = {
        create(graph) {
            return new GraphDrawer(graph)
        }
    }
})(window)