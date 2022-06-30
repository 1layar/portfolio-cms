import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Meet At" source="meetAt" />
        <TextField label="Meet Duration" source="meetDuration" />
        <TextField label="Sender" source="sender" />
        <TextField label="Subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
