import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ARTICLE_TITLE_FIELD } from "../article/ArticleTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Article" source="article.id" reference="Article">
          <TextField source={ARTICLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
