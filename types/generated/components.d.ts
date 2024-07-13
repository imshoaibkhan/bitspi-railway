import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockFeatures extends Schema.Component {
  collectionName: 'components_block_features';
  info: {
    displayName: 'features';
    description: '';
  };
  attributes: {
    headingFeature1: Attribute.Text;
    headingFeature2: Attribute.Text;
    headingFeature3: Attribute.Text;
    feature1: Attribute.Component<'element.feature-list', true>;
    feature2: Attribute.Component<'element.feature2', true>;
    feature3: Attribute.Component<'element.feature3', true>;
  };
}

export interface BlockOurValue extends Schema.Component {
  collectionName: 'components_block_our_values';
  info: {
    displayName: 'our-value';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    card: Attribute.Component<'element.card', true>;
  };
}

export interface BlockProduct extends Schema.Component {
  collectionName: 'components_block_products';
  info: {
    displayName: 'product';
    description: '';
  };
  attributes: {
    heroHeading: Attribute.String;
    heroTagline: Attribute.Text;
    heroBtnLink: Attribute.String;
    heroBtnText: Attribute.String;
    about: Attribute.Component<'element.about-product'>;
  };
}

export interface BlockServices extends Schema.Component {
  collectionName: 'components_block_services';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    cards: Attribute.Component<'element.card', true>;
    serviceDetails: Attribute.Component<'element.service-details', true>;
  };
}

export interface BlockTestimonials extends Schema.Component {
  collectionName: 'components_block_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    heading: Attribute.Text;
    isVisible: Attribute.Boolean & Attribute.DefaultTo<true>;
    details: Attribute.Component<'element.testimonial-details', true>;
  };
}

export interface BlockWhoWeAre extends Schema.Component {
  collectionName: 'components_block_who_we_ares';
  info: {
    displayName: 'who-we-are';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ElementAboutCard extends Schema.Component {
  collectionName: 'components_element_about_cards';
  info: {
    displayName: 'about-card';
  };
  attributes: {
    iconClassName: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementAboutProduct extends Schema.Component {
  collectionName: 'components_element_about_products';
  info: {
    displayName: 'about-product';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    card: Attribute.Component<'element.about-card', true>;
  };
}

export interface ElementCard extends Schema.Component {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementCareersCard extends Schema.Component {
  collectionName: 'components_element_careers_cards';
  info: {
    displayName: 'careers-card';
  };
  attributes: {
    iconClassName: Attribute.String;
    title: Attribute.String;
  };
}

export interface ElementClientImages extends Schema.Component {
  collectionName: 'components_element_client_images';
  info: {
    displayName: 'client-images';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ElementFeatureList extends Schema.Component {
  collectionName: 'components_element_feature_lists';
  info: {
    displayName: 'Feature1';
    description: '';
  };
  attributes: {
    featureList: Attribute.String;
  };
}

export interface ElementFeature2 extends Schema.Component {
  collectionName: 'components_element_feature2s';
  info: {
    displayName: 'Feature2';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementFeature3 extends Schema.Component {
  collectionName: 'components_element_feature3s';
  info: {
    displayName: 'Feature3';
  };
  attributes: {
    iconClassName: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementImportantLinks extends Schema.Component {
  collectionName: 'components_block_important_links';
  info: {
    displayName: 'important-links';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementOurServices extends Schema.Component {
  collectionName: 'components_block_our_services';
  info: {
    displayName: 'our-services';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementServiceDetails extends Schema.Component {
  collectionName: 'components_element_service_details';
  info: {
    displayName: 'serviceDetails';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cards: Attribute.Component<'element.card', true>;
  };
}

export interface ElementSocialLinks extends Schema.Component {
  collectionName: 'components_element_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    link: Attribute.String;
    iconClassName: Attribute.String;
  };
}

export interface ElementTestimonialDetails extends Schema.Component {
  collectionName: 'components_element_testimonial_details';
  info: {
    displayName: 'testimonial details';
  };
  attributes: {
    ratings: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }>;
    message: Attribute.Text;
    name: Attribute.String;
    role: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.features': BlockFeatures;
      'block.our-value': BlockOurValue;
      'block.product': BlockProduct;
      'block.services': BlockServices;
      'block.testimonials': BlockTestimonials;
      'block.who-we-are': BlockWhoWeAre;
      'element.about-card': ElementAboutCard;
      'element.about-product': ElementAboutProduct;
      'element.card': ElementCard;
      'element.careers-card': ElementCareersCard;
      'element.client-images': ElementClientImages;
      'element.feature-list': ElementFeatureList;
      'element.feature2': ElementFeature2;
      'element.feature3': ElementFeature3;
      'element.important-links': ElementImportantLinks;
      'element.our-services': ElementOurServices;
      'element.service-details': ElementServiceDetails;
      'element.social-links': ElementSocialLinks;
      'element.testimonial-details': ElementTestimonialDetails;
    }
  }
}
