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

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    logo: Attribute.Media<'images'>;
    socialLink: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    logo: Attribute.Media<'images'>;
    ctaButton: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'components.link'>;
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
      'components.link': ComponentsLink;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'page-properties-seo.meta-tag': PagePropertiesSeoMetaTag;
      'page-properties-seo.seo': PagePropertiesSeoSeo;
    }
  }
}
