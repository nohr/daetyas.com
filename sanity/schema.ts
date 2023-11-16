import { schemaTypes } from "@/sanity/schemas";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...schemaTypes],
};
