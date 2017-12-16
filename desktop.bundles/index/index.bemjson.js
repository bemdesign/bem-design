module.exports = {
	block: 'page',
	title: 'BEM Design',
	favicon: '/favicon.ico',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
	},
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { type: 'full-screen', theme: 'islands' },
	content: [
	{
		block: 'demo',
		mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
		},
		content: [
		// {
		// 	elem: 'layout',
		// 	elemMods: { view: 'default' },
		// 	content: [
		// 	{
		// 		elem: 'content',
		// 		content: [
		// 		{
		// 			block: 'text',
		// 			mods: { size: 'xxl', view: 'ghost', weight: 'bold' },
		// 			content: [
		// 			'Yamoney Design',
		// 			{
		// 				tag: 'a',
		// 				block: 'text',
		// 				mods: { view: 'link' },
		// 				mix: { block: 'decorator', mods: { 'indent-l': 's' } },
		// 				attrs: { href: 'https://bitbucket-public.yamoney.ru/users/meeq/repos/prototype/browse' },
		// 				content: 'на Bitbucket'
		// 			},
		// 			{
		// 				tag: 'a',
		// 				block: 'text',
		// 				mods: { view: 'link' },
		// 				mix: { block: 'decorator', mods: { 'indent-l': 's' } },
		// 				attrs: { href: 'https://t.me/bemdesign' },
		// 				content: 'в Telegram'
		// 			}]
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'Масштабируемая'
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'дизайн-система'
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'на основе БЭМ'
		// 		}]
		// 	}]
		// },
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: { block: 'promo-cards', elem: 'media-section' },
			content: [
			{
				elem: 'theme-name',
				content: 'Video'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [{ elem: 'media', elemMods: { type: 'video' } }, { block: 'decorator', mods: { 'indent-b': 'xxxxl' } }],
					content: [
					// {
					// 	block: 'media',
					// 	mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-video-back' }, { block: 'promo-cards', elem: 'hover' }],
					// 	content: [
					// 	{
					// 		elem: 'video',
					// 		mix: { block: 'promo-cards', elem: 'media-video' },
					// 		content: [
					// 		{
					// 			elem: 'play'
					// 		}]
					// 	},
					// 	{
					// 		elem: 'title',
					// 		mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-title' }],
					// 		content: [
					// 		{
					// 			block: 'text',
					// 			mods: { view: 'inverse', size: 'xxl' },
					// 			content: 'Mad Lib Theater with John Cena'
					// 		}]
					// 	},
					// 	{
					// 		elem: 'footer',
					// 		mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-footer' }],
					// 		content: [
					// 		{
					// 			block: 'pt-icon-plus',
					// 			mods: { 'vertical-align': 'center' },
					// 			content: [
					// 			{
					// 				elem: 'icon',
					// 				elemMods: { 'indent-right': 'xs' },
					// 				content: [
					// 				{
					// 					block: 'media',
					// 					elem: 'channel-logo'
					// 				}]
					// 			},
					// 			{
					// 				elem: 'block',
					// 				content: [
					// 				{
					// 					block: 'text',
					// 					mods: { view: 'inverse', size: 's' },
					// 					content: 'The Tonight Show…'
					// 				}]
					// 			}]
					// 		},
					// 		{
					// 			elem: 'view',
					// 			content: [
					// 			{
					// 				block: 'text',
					// 				mods: { view: 'inverse', size: 's' },
					// 				content: '512K views'
					// 			}]
					// 		}]
					// 	}]
					// },
					// {
					// 	block: 'media',
					// 	mix: [{ block: 'pt-card', mods: { view: 'default' } }, { block: 'promo-cards', elem: 'media-text-back' }, { block: 'promo-cards', elem: 'hover' }],
					// 	content: [
					// 	{
					// 		elem: 'cover',
					// 		mix: { block: 'promo-cards', elem: 'media-cover' },
					// 		content: [
					// 		{
					// 			elem: 'author',
					// 			mix: { block: 'promo-cards', elem: 'media-author-top' },
					// 			content: [
					// 			{
					// 				block: 'pt-icon-plus',
					// 				mods: { 'vertical-align': 'center' }, 
					// 				content: [
					// 				{
					// 					elem: 'icon',
					// 					elemMods: { 'indent-right': 'xs' },
					// 					content: [
					// 					{
					// 						block: 'media',
					// 						elem: 'avatar'
					// 					}]
					// 				},
					// 				{
					// 					elem: 'block',
					// 					content: [
					// 					{
					// 						block: 'text',
					// 						mods: { view: 'inverse', size: 's' },
					// 						content: 'James Bridle'
					// 					}]
					// 				}]
					// 			}]
					// 		}]
					// 	},
					// 	{
					// 		elem: 'article-title',
					// 		mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-article' }],
					// 		content: [
					// 		{
					// 			block: 'text',
					// 			mods: { view: 'primary', size: 'xxl' },
					// 			content: 'Something is wrong on the internet'
					// 		},
					// 		{
					// 			block: 'text',
					// 			mods: { view: 'primary', size: 'm' },
					// 			content: 'I’m James Bridle. I’m a writer and artist concerned with technology and culture. I usually write on my own blog…'
					// 		}]
					// 	},
					// 	{
					// 		elem: 'footer',
					// 		mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-text-footer' }],
					// 		content: [
					// 		{
					// 			block: 'text',
					// 			mods: { view: 'secondary', size: 's' },
					// 			content: 'Nov 6 / 21 min read'
					// 		},
					// 		{
					// 			block: 'text',
					// 			mods: { view: 'primary', size: 's' },
					// 			content: '512K views'
					// 		}]
					// 	}]
					// },
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-video-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'video',
							mix: { block: 'promo-cards', elem: 'media-video' },
							content: [
							{
								elem: 'play'
							}]
						},
						{
							elem: 'video-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-title' }],
							content: [
							{
								block: 'text',
								mods: { view: 'inverse', size: 'xxl' },
								content: 'Mad Lib Theater with John Cena'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-footer' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' }, 
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 'xs' },
									content: [
									{
										block: 'media',
										elem: 'channel-logo'
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										content: 'The Tonight Show…'
									}]
								}]
							},
							{
								block: 'text',
								mods: { view: 'inverse', size: 's' },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'default' } }, { block: 'promo-cards', elem: 'media-text-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'article-cover',
							mix: { block: 'promo-cards', elem: 'media-cover' },
							content: [
							{
								elem: 'article-author',
								content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									mix: { block: 'promo-cards', elem: 'media-author-top' },
									content: [
									{
										elem: 'icon',
										elemMods: { 'indent-right': 'xs' },
										content: [
										{
											block: 'media',
											elem: 'avatar'
										}]
									},
									{
										elem: 'block',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 's' },
											content: 'James Bridle'
										}]
									}]
								}]
							}]
						},
						{
							elem: 'article-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-article' }],
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxl' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: 'Something is wrong on the internet'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 'm' },
								content: 'I’m James Bridle. I’m a writer and artist concerned with technology and culture. I usually write on my own blog…'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-text-footer' }],
							content: [
							{
								block: 'text',
								mods: { view: 'secondary', size: 's' },
								content: 'Nov 6 / 21 min read'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 's' },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-music-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'music-cover',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-music-cover' }],
							content: [
							{
								elem: 'music-info',
								content: [
								{
									block: 'text',
									mods: { view: 'inverse', size: 'xxl', align: 'center' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
									content: 'Pitchfork Best New Music',
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 'm', align: 'center' },
									content: 'Pitchfork',
								}]
							}]
						},
						{
							block: 'playlist',
							mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' } }, { block: 'promo-cards', elem: 'media-playlist' }],
							content: [
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'xs' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light'  },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
						content: 'Media Content'
					},
					{
						block: 'text',
						attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
						mods: { size: 'xl' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-1' },
							content: 'Video'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-2' },
							content: 'Text'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-3' },
							content: 'Music'
						}
					}]
				}]
			},
			{
				elem: 'controls',
				content: [
				{
					block: 'icon',
					mods: { 'arrow-up-2': 'xl-primary' },
					mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
				},
				{
					block: 'icon',
					mods: { 'arrow-down-2': 'xl-primary' }
				}]
			},
			]
		}]
	}]
};