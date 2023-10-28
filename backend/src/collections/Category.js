import payload from "payload";
/** @type {import('payload/types').CollectionConfig} */
const Category = {
  slug: "Category",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "log",
            data: {
              collectionName: "Category",
              action: "Create",
              timestamp: new Date(),
              Category: args.result.id,
            },
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "log",
            data: {
              collectionName: "Category",
              action: "Delete",
              timestamp: new Date(),
              Category: args.result.id,
            },
          });
        } else if (args.operation == "updateByID") {
          payload.create({
            collection: "log",
            data: {
              collectionName: "Category",
              action: "Update",
              timestamp: new Date(),
              Category: args.result.id,
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default Category;
