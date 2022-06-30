import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ARTICLE_TITLE_FIELD } from "../article/ArticleTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { CONFIG_TITLE_FIELD } from "../config/ConfigTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Config" source="config.id" reference="Config">
          <TextField source={CONFIG_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceField
          label="User Profile"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Comment"
          target="UserId"
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
        <ReferenceManyField
          reference="Project"
          target="UserId"
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
