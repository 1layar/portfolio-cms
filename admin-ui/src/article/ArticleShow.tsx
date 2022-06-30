import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ARTICLE_TITLE_FIELD } from "./ArticleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const ArticleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Comment"
          target="ArticleId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Article"
              source="article.id"
              reference="Article"
            >
              <TextField source={ARTICLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Author" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Body" source="body" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Tag" target="ArticleId" label="Tags">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Article"
              source="article.id"
              reference="Article"
            >
              <TextField source={ARTICLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Color" source="color" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Icon" source="icon" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Slug" source="slug" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
