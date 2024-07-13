'use strict';

/**
 * product-and-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-and-service.product-and-service');
