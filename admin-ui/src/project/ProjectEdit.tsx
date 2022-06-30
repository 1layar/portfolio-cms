import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";
import { TagTitle } from "../tag/TagTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Demo URL" source="demoUrl" />
        <TextInput label="Publish At" source="publishAt" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Source URL" source="sourceUrl" />
        <ReferenceInput source="user.id" reference="User" label="Stars">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <TextInput label="Thumbnail" source="thumbnail" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
