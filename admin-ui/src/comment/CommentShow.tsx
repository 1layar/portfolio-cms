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
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Article" source="article.id" reference="Article">
          <TextField source={ARTICLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Author" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
