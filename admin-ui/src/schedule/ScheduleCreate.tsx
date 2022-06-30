import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
