import { extend, CustomerSegmentTemplate } from "@shopify/ui-extensions/admin";

// The target used here must match the target used in the extension's toml file (./shopify.extension.toml)
// The second argument to the render callback provides access to several useful APIs like i18n.
extend("admin.customers.segmentation-templates.render", (root, { i18n }) => {
  root.appendChild(
    root.createComponent(
      // The CustomerSegmentTemplate component provides an API for setting the title, description, date, query, and query to insert of the segmentation template.
      CustomerSegmentTemplate,
      {
        title: i18n.translate('title'),
        description: i18n.translate('description'),
        createdOn: new Date('2023-08-15').toISOString(),
        query: 'number_of_orders = 1 AND products_purchased(id: (product_id)) = true',
        queryToInsert: 'number_of_orders = 1 AND products_purchased(id: (',
      }
    )
  );
});