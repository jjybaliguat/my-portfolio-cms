import type { Schema, Attribute } from '@strapi/strapi';

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
      'page-properties-seo.meta-tag': PagePropertiesSeoMetaTag;
      'page-properties-seo.seo': PagePropertiesSeoSeo;
    }
  }
}
