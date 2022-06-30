import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USERPROFILE_TITLE_FIELD } from "./UserProfileTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Biography" source="biography" />
        <TextField label="Contact Email" source="contactEmail" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Facebook Username" source="facebookUsername" />
        <TextField label="Github Username" source="githubUsername" />
        <TextField label="Hobby" source="hobby" />
        <TextField label="ID" source="id" />
        <TextField label="Instagram Username" source="instagramUsername" />
        <TextField label="Linkedin Username" source="linkedinUsername" />
        <TextField label="Location" source="location" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Quote" source="quote" />
        <TextField label="Twitter Username" source="twitterUsername" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Whatsapp Usernname" source="whatsappUsernname" />
        <TextField label="Youtube Username" source="youtubeUsername" />
        <ReferenceManyField
          reference="Skill"
          target="UserProfileId"
          label="Skills"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Experience" source="experience" />
            <TextField label="Icon" source="icon" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="User Profile"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Tool"
          target="UserProfileId"
          label="Tools"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Colored" source="colored" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Icon" source="icon" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="User Profile"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
