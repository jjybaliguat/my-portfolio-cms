/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";
import { Illo } from "../../components/Illo";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import { Plus } from "@strapi/icons";

const HomePage = () => {
  return (
    <Layout>
      <BaseHeaderLayout
        title="Contact Form Plugin"
        subtitle="Manage Contacts in one place."
        as="h2"
      />
      <ContentLayout>
        <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any messages yet..."
            action={
              <Button
                variant="secondary"
                startIcon={<Plus />}
              >
                Send your first message
              </Button>
            }
          />
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
