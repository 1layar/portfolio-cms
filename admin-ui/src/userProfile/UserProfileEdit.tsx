import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SkillTitle } from "../skill/SkillTitle";
import { ToolTitle } from "../tool/ToolTitle";
import { UserTitle } from "../user/UserTitle";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <div />
        <TextInput label="Contact Email" source="contactEmail" type="email" />
        <TextInput label="Facebook Username" source="facebookUsername" />
        <TextInput label="Github Username" source="githubUsername" />
        <div />
        <TextInput label="Instagram Username" source="instagramUsername" />
        <TextInput label="Linkedin Username" source="linkedinUsername" />
        <TextInput label="Location" source="location" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <div />
        <ReferenceArrayInput
          source="skills"
          reference="Skill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tools"
          reference="Tool"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ToolTitle} />
        </ReferenceArrayInput>
        <TextInput label="Twitter Username" source="twitterUsername" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Whatsapp Usernname" source="whatsappUsernname" />
        <TextInput label="Youtube Username" source="youtubeUsername" />
      </SimpleForm>
    </Edit>
  );
};
