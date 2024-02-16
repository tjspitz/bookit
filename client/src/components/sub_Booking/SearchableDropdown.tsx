import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { FormValidators, Passenger, ValidationHandler, Validators } from '../../lib/types';

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
      variant={`bg-white-semi border ${formIsValidated[formKey] ? 'border-secondary' : 'border-danger'}`}
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
