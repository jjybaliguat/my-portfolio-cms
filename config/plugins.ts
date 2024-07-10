export default () => ({
    slugify: {
        enabled: true,
        config: {
          contentTypes: {
            blog: {
              field: 'slug',
              references: 'title',
            },
            category: {
              field: 'slug',
              references: 'name',
            },
          },
        },
      },
});
