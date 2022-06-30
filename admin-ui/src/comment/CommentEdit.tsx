import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ArticleTitle } from "../article/ArticleTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="Article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
