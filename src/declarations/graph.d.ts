declare enum GraphType {

}

declare enum GraphLabel {

}

declare enum NodeType {
	/** Mapped to image "Elastic Instance" */
	AwsLib = 'aws_lb',
	AwsListener = 'aws_lb_listener',

	/** Mapped to image "EC2 Instance Container" */
	AwsInstance = 'aws_lb_instance',
	AwsGroup = 'aws_lb_target_group'
}

declare interface GraphNode {
	type: NodeType;
	label: string;
	metadata: {
		name: string;
		lb_type: string;
		display_name: Array<string>;
	}
}

declare interface Graph {
	directed: boolean;
	type: GraphType;
	label: GraphLabel;
	metadata: object;
	nodes: {
		[key: string]: GraphNode;
	};
}
