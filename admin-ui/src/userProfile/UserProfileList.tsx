import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"User Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
