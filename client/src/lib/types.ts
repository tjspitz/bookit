export type Passenger = {
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

export type Confirmation = Pick<TicketInfo, 'pnr' | 'status' | 'fare'>;

export const initialConfirmationState = {
  pnr: '',
  status: '',
  fare: 0,
};

export const initialPassengerState = {
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
