import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    intro: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    button: Attribute.Component<'shared.link'>;
    socialNetwork: Attribute.Component<'shared.social-network'>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    rightButton: Attribute.Component<'shared.link'>;
  };
}

export interface PagePropertiesSeoMetaTag extends Schema.Component {
  collectionName: 'components_page_properties_seo_meta_tags';
  info: {
    displayName: 'MetaTag';
    icon: 'code';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.String;
  };
}

export interface PagePropertiesSeoSeo extends Schema.Component {
  collectionName: 'components_page_properties_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaTag: Attribute.Component<'page-properties-seo.meta-tag', true>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface SharedImageLink extends Schema.Component {
  collectionName: 'components_shared_image_links';
  info: {
    displayName: 'socialLinks';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    href: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedSocialNetwork extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'socialNetwork';
  };
  attributes: {
    intro: Attribute.String;
    links: Attribute.Component<'shared.image-link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'global.navigation': GlobalNavigation;
      'page-properties-seo.meta-tag': PagePropertiesSeoMetaTag;
      'page-properties-seo.seo': PagePropertiesSeoSeo;
      'shared.button': SharedButton;
      'shared.image-link': SharedImageLink;
      'shared.link': SharedLink;
      'shared.social-network': SharedSocialNetwork;
    }
  }
}
