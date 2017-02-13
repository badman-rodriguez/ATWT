var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var page = keystone.list('Page');

	// Section Name
	locals.section = 'Page';

	// Page Data
	locals.data = {
		page: {}
	};
	// Filter to get page data
	locals.filters = {
		slug: req.params.page,
	};
	
	page.model.findOne({
		state: 'published',
		slug: locals.filters.slug,
	}).exec(function(err, result){
		locals.data.page = result;
	});

	// Render the view
	view.render('page', {layout:'page'});
};