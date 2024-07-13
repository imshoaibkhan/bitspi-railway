'use strict';

/**
 * business-inquiry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-inquiry.business-inquiry');
