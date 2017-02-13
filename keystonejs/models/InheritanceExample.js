var keystone = require('keystone');
var Types = keystone.Field.Types;
var Page = require('./Page');

/**
 * Splash Page   Model
 * ==========
 */

var SplashPage = new keystone.List('SplashPage',  { inherits: Page });

SplashPage.add({
    heroImage: { type: Types.CloudinaryImage },
    url : { type: Types.Url },
    money_example: { type: Types.Money },
    email_address: { type: Types.Email, displayGravatar: true }
});

SplashPage.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

SplashPage.defaultColumns = 'title, state|20%, publishedDate|20%';
SplashPage.register();

