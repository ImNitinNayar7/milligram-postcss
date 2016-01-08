Package.describe({
	name: 'milligram:milligram-postcss',
	version: '0.0.1',
	summary: 'A minimalist CSS framework on PostCSS version.',
	git: 'https://github.com/milligram/milligram-postcss.git',
	documentation: 'readme.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/milligram.css'
	], 'client');
});
