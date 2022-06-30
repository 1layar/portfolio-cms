import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Meet At" source="meetAt" />
        <NumberInput label="Meet Duration" source="meetDuration" />
        <TextInput label="Sender" source="sender" />
        <SelectInput
          source="subject"
          label="Subject"
          choices={[
            { label: "Job Offer", value: "JobOffer" },
            { label: "Teaching", value: "Teaching" },
            { label: "Freelance", value: "Freelance" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
