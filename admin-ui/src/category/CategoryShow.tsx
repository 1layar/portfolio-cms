import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Article"
          target="CategoryId"
          label="Articles"
        >
          <Datagrid rowClick="show">
            <TextField label="Body" source="body" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Slug" source="slug" />
            <TextField label="Thumbnail" source="thumbnail" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Project"
          target="CategoryId"
          label="Projects"
        >
          <Datagrid rowClick="show">
            <TextField label="Body" source="body" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Demo URL" source="demoUrl" />
            <TextField label="ID" source="id" />
            <TextField label="Publish At" source="publishAt" />
            <TextField label="Slug" source="slug" />
            <TextField label="Source URL" source="sourceUrl" />
            <ReferenceField label="Stars" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Thumbnail" source="thumbnail" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
