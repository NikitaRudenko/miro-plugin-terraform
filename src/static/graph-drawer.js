(function(global) {

    const METADATA_KEY = '3074457345621854627'

    class GraphDrawer {
        constructor(graph) {
            this._graph = graph
        }


        _renderNodes() {
            const widgetsToCreate = this._graph.nodes.map((node) => {
                return {
                    type: 'image',
                    url: `${static_url}/icons/ec2-instance-container.svg`,
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
                // metadata: {
                //     keyTest: 'valueTest'
                // },
                // x: node.x,
                // y: node.y
            }))

            console.log(links)

            return miro.board.widgets.create(links)
        }

        render() {
            this._renderNodes()
                .then((nodeIdWidgetMap) => {
                    console.log(nodeIdWidgetMap)
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
