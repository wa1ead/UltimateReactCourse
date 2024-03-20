/* eslint-disable no-unused-vars */
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const {
    settings: {
      maxBookingsLength,
      minBookingsLength,
      maxGuestsPerBooking,
      breakfast,
    } = {},
    isLoading,
    error,
  } = useSettings();

  const { updateSetting, isEditing } = useUpdateSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingsLength}
          onBlur={(e) => handleUpdate(e, "minBookingsLength")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingsLength}
          onBlur={(e) => handleUpdate(e, "maxBookingsLength")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfast}
          onBlur={(e) => handleUpdate(e, "breakfast")}
          disabled={isEditing}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
