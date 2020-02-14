const JSON_TEST =
{
	directed: true,
	type: 'graph type',
	label: 'graph label',
	metadata: {
		'user-defined': 'values',
	},
	nodes: {
		'aws_lb.this[0]': {
			type: 'aws_lb',
			label: 'this',
			metadata: {
				name: 'this',
				lb_type: 'application',
				display_name: ['web-app'],
			},
		},
		'aws_lb_listener.this[0]': {
			type: 'aws_lb_listener',
			label: 'this',
			metadata: {
				name: 'this',
				port: '80',
				protocol: 'HTTP',
				default_action_type: 'forward',
			},
		},
		'aws_lb_target_group.this[0]': {
			type: 'aws_lb_target_group',
			label: 'this',
			metadata: {
				name: 'this',
				vpc_id: 'vpc-123',
				port: 443,
				protocol: 'HTTPS',
				target_type: 'instance',
			},
		},
		'aws_lb_target_group.custom[0]': {
			type: 'aws_lb_target_group',
			label: 'custom',
			metadata: {
				name: 'custom',
				vpc_id: 'vpc-123',
				port: 443,
				protocol: 'HTTPS',
				target_type: 'instance',
			},
		},
		'aws_instance.this[0]': {
			type: 'aws_instance',
			label: 'this',
			metadata: {
				name: 'this',
				subnet_id: ['subnet-123'],
				instance_type: 'c5.large',
				count: 3,
				availability_zone: 'us-east-1a',
				ami: 'ami-123',
			},
		},
		'aws_instance.this[1]': {
			type: 'aws_instance',
			label: 'this',
			metadata: {
				name: 'this',
				subnet_id: ['subnet-123'],
				instance_type: 'c5.large',
				count: 3,
				availability_zone: 'us-east-1a',
				ami: 'ami-123',
			},
		},
		'aws_instance.this[2]': {
			type: 'aws_instance',
			label: 'this',
			metadata: {
				name: 'this',
				subnet_id: ['subnet-123'],
				instance_type: 'c5.large',
				count: 3,
				availability_zone: 'us-east-1a',
				ami: 'ami-123',
			},
		},
		'aws_instance.custom[0]': {
			type: 'aws_instance',
			label: 'custom',
			metadata: {
				name: 'custom',
				subnet_id: ['subnet-456'],
				instance_type: 'm5.large',
				count: 1,
				availability_zone: 'us-east-1a',
				ami: 'ami-456',
			},
		},
	},
	edges: [
		{
			source: 'aws_lb.this[0]',
			relation: 'edge relationship',
			target: 'aws_lb_listener.this[0]',
			directed: true,
			label: '',
			metadata: {
				'user-defined': 'values',
			},
		},
		{
			source: 'aws_lb_listener.this[0]',
			relation: 'edge relationship',
			target: 'aws_lb_target_group.this[0]',
			directed: true,
			label: '',
			metadata: {
				'user-defined': 'values',
			},
		},
		{
			source: 'aws_lb_listener.this[0]',
			relation: 'edge relationship',
			target: 'aws_lb_target_group.custom[0]',
			directed: true,
			label: '',
			metadata: {
				'user-defined': 'values',
			},
		},
		{
			source: 'aws_lb_target_group.this[0]',
			relation: 'edge relationship',
			target: 'aws_instance.this[0]',
			directed: true,
			label: '',
			metadata: {
				'user-defined': 'values',
			},
		},
		{
			source: 'aws_lb_target_group.this[0]',
			relation: 'edge relationship',
			target: 'aws_instance.this[1]',
			directed: true,
			label: '',
			metadata: {
				'user-defined': 'values',
			},
		},
		{
			source: 'aws_lb_target_group.this[0]',
			relation: 'edge relationship',
			target: 'aws_instance.this[2]',
			directed: true,
			label: '',
			metadata: {
				'user-defined': 'values',
			},
		},
		{
			source: 'aws_lb_target_group.custom[0]',
			relation: 'edge relationship',
			target: 'aws_instance.custom[0]',
			directed: true,
			label: '',
			metadata: {
				'user-defined': 'values',
			},
		},
	],
}