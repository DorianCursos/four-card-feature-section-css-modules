import { v4 } from 'uuid';

const PATH = '/assets/images/';

export const CARD_DATA = [
	{
		id: v4(),
		title: 'Supervisor',
		text: 'Monitors activity to identify project roadblocks',
		icon: PATH + 'icon-supervisor.svg',
		color: 'cyan'
	},
	{
		id: v4(),
		title: 'Team Builder',
		text: 'Scans our talent network to create the optimal team for your project',
		icon: PATH + 'icon-team-builder.svg',
		color: 'red'
	},
	{
		id: v4(),
		title: 'Karma',
		text: 'Regularly evaluates our talent to ensure quality',
		icon: PATH + 'icon-karma.svg',
		color: 'yellow'
	},
	{
		id: v4(),
		title: 'Calculator',
		text: 'Uses data from past projects to provide better delivery estimates',
		icon: PATH + 'icon-calculator.svg',
		color: 'blue'
	}
];
