import i18next from 'i18next';
import Example from './Example';
import en from './i18n/en';
import tr from './i18n/tr';
import kr from './i18n/kr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);
i18next.addResourceBundle('kr', 'examplePage', kr);

const ExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/example',
			component: Example
		}
	]
};

export default ExampleConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/
