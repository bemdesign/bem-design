module.exports = {
	block: 'page',
	title: 'BEM Illustrations',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
			{ elem: 'meta', attrs: { name: 'description', content: '' } },
			{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
			{ elem: 'css', url: 'illustrations-grid.min.css' },
			{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	mix: {
		block: 'theme',
		mods: { color: 'custom', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	scripts: [{ elem: 'js', url: 'illustrations-grid.min.js' }],
	mods: { theme: 'islands' },
	content: [
	{
		block: 'demo',
		mix: [
			{ block: 'b-page', elem: 'content' },
			{ block: 'theme' }],
		content: [
		{
			elem: 'content',
			content: [
			{
				block: 'demo',
				elem: 'logo'
			},
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
				mix: [{ block: 'decorator', mods: { 'indent-b': 'xxxxxl' } }, { block: 'demo', elem: 'title' }],
				content: 'Illustrations'
			},
			{
				block: 'illustration-list',
				mix: { block: 'tpl-grid', mods: { columns: '12', 'col-gap': 'third' } },
				content: [
				{
					block: 'illustration-item',
					mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { col: '6' } },
					content: [
					{
						elem: 'view',
						elemMods: { view: 'inverse' },
						content: [
							{
								block: 'image',
								width: 400,
								url: '/assets/i/bem-team.png'
							}
						]
					},
					// {
					// 	elem: 'name',
					// 	content: [
					// 	{
					// 		block: 'text',
					// 		mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
					// 		content: "BEM Design Team"
					// 	}]
					// }
					]
				},
				{
					block: 'illustration-item',
					mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { col: '6' } },
					content: [
					{
						elem: 'view',
						elemMods: { view: 'inverse' },
						content: [
							{
								block: 'image',
								width: 400,
								url: '/assets/i/bem-show.png'
							}
						]
					},
					// {
					// 	elem: 'name',
					// 	content: [
					// 	{
					// 		block: 'text',
					// 		mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
					// 		content: "BEM Show"
					// 	}]
					// }
					]
				},
				{
					block: 'illustration-item',
					mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { col: '6' } },
					content: [
					{
						elem: 'view',
						elemMods: { view: 'inverse' },
						content: [
							{
								block: 'image',
								width: 400,
								url: '/assets/i/bem-hackathon.png'
							}
						]
					},
					// {
					// 	elem: 'name',
					// 	content: [
					// 	{
					// 		block: 'text',
					// 		mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
					// 		content: "BEM Hackathon"
					// 	}]
					// }
					]
				},
				{
					block: 'illustration-item',
					mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { col: '6' } },
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'illustration',
						}]
					},
					// {
					// 	elem: 'name',
					// 	content: [
					// 	{
					// 		block: 'text',
					// 		mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
					// 		content: "BEM Night"
					// 	}]
					// }
					]
				},
				{
					block: 'illustration-item',
					mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { col: '6' } },
					content: [
					{
						elem: 'view',
						content: [
						]
					},
					// {
					// 	elem: 'name',
					// 	content: [
					// 	{
					// 		block: 'text',
					// 		mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
					// 		content: "BEM Channel"
					// 	}]
					// }
					]
				},
				{
					block: 'illustration-item',
					mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { col: '6' } },
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'illustration',
						}]
					},
					// {
					// 	elem: 'name',
					// 	content: [
					// 	{
					// 		block: 'text',
					// 		mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
					// 		content: "BEM Magazine"
					// 	}]
					// }
					]
				}]
			}]
		},
		{
			elem: 'footer'
		}]
	}]
};
