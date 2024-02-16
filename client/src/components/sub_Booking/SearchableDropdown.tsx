import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import {
  FormValidators,
  Passenger,
  ValidationHandler,
  Validators,
} from '../../lib/types';

/**
 *
 * @prop collection
 * options to generate a dropdown list from
 * @prop formKey
 * expects that your `form` state is an object w/ propertires
 * @prop setForm
 * allows handlers to update your `form` based on the `formKey` prop
 * @prop formIsValidated
 * expects an object similar to your `form` state;
 * styles the dropdown based upon whether a valid selection is made
 * @prop validatorKey
 * expects that your `validator` is an object whose properties are  functions, keyed with some sensible naming convention
 * @prop handleValidations
 * an intermediary which takes 2 required args and 1 optional arg;
 * will update `formIsValidated` state by calling `validator` from the library
 * @returns a component which will generate a searchable dropdown,
 * based on the `collection` prop,
 * will call validators,
 * and will update the overall `form` state accordingly
 */
const SearchableDropdown = ({
  collection,
  formKey,
  setForm,
  formIsValidated,
  validatorKey,
  handleValidations,
}: {
  collection: string[];
  formKey: keyof Passenger;
  setForm: Dispatch<SetStateAction<Passenger>>;
  formIsValidated: FormValidators;
  validatorKey: keyof Validators;
  handleValidations: ValidationHandler;
}) => {
  const [search, setSearch] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<typeof collection>([
    ...collection,
  ]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value.toLowerCase();

    setSearch(query);
    const filtered = collection.filter((entry) =>
      entry.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };
  const handleSelect = (option: string): void => {
    setSearch(option);
    setForm((s) => ({ ...s, [formKey]: option }));
    handleValidations(validatorKey, formKey, option);
  };

  return (
    <DropdownButton
      title={search || 'Select a Station'}
      variant={`${formIsValidated[formKey] ? 'light' : 'outline-danger'}`}
    >
      <Form.Control
        autoFocus
        placeholder="find a station..."
        value={search}
        onChange={handleSearchChange}
      />
      <Dropdown.Divider />
      {filteredItems.map((option, i) => (
        <Dropdown.Item
          key={`o-${i + 1}`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SearchableDropdown;
