// ========== DATA TYPES & INITIAL STATES ==========
export type Passenger = {
  email: string;
  firstName: string;
  lastName: string;
  fromStation: string;
  toStation: string;
  travelDate: string;
  trainNo: string;
};

export type TicketInfo = Passenger & {
  pnr: string;
  bookedOn: string;
  lastUpdated: string;
  status: string;
  fare: number;
};

export type Confirmation = Pick<
  TicketInfo,
  'email' | 'pnr' | 'travelDate' | 'status' | 'fare'
>;

export const initialConfirmationState = {
  email: '',
  pnr: '',
  travelDate: '',
  status: '',
  fare: 0,
};

export const initialPassengerState = {
  email: '',
  firstName: '',
  lastName: '',
  fromStation: '',
  toStation: '',
  travelDate: '',
  trainNo: '',
};

export const initialTicketState = {
  ...initialPassengerState,
  ...initialConfirmationState,
  bookedOn: '',
  lastUpdated: '',
};

// ========== FORM TYPES & INITIAL STATES ==========
export type FormValidators = {
  email: boolean;
  firstName: boolean;
  lastName: boolean;
  fromStation: boolean;
  toStation: boolean;
  travelDate: boolean;
  trainNo: boolean;
}

export const initialValidatorsState = {
  email: false,
  firstName: false,
  lastName: false,
  fromStation: false,
  toStation: false,
  travelDate: false,
  trainNo: false,
};

export type Validators = {
  [k: string]: (param: string) => boolean
};

export type ValidationHandler = (
  validatorKey: keyof Validators,
  formKey: keyof Passenger,
  value?: string
) => void
