import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAnnouncement extends Schema.Component {
  collectionName: 'components_components_announcements';
  info: {
    displayName: 'Announcement';
  };
  attributes: {
    anouncementBody: Attribute.String;
    cta: Attribute.Component<'components.cta'>;
  };
}

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'CTA';
    icon: 'phone';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ComponentsNavItem extends Schema.Component {
  collectionName: 'components_components_nav_items';
  info: {
    displayName: 'navItem';
    icon: 'command';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.announcement': ComponentsAnnouncement;
      'components.cta': ComponentsCta;
      'components.nav-item': ComponentsNavItem;
      'page-properties-seo.meta-tag': PagePropertiesSeoMetaTag;
      'page-properties-seo.seo': PagePropertiesSeoSeo;
    }
  }
}
