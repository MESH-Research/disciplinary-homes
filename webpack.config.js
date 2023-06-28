const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

const config = {
	...defaultConfig,
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			...defaultConfig.optimization.splitChunks,
			cacheGroups: {
				...defaultConfig.optimization.splitChunks.cacheGroups,
				style: {
					...defaultConfig.optimization.splitChunks.cacheGroups.style,
					test: /^[\\/](?!.*editor).+(\.module)?\.(pc|sc|sa|c)ss$/
				}
			}
		}
	}
};

module.exports = config;
