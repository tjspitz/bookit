export type Passenger = {
  firstName: string;
  lastName: string;
  fromStation: string;
  toStation: string;
  travelDate: Date;
  trainNo: string;
};

export type TicketInfo = Passenger & {
  pnr: string;
  bookedOn: Date;
  lastUpdated: Date;
  status: string;
  fare: number;
};

export type Confirmation = Pick<TicketInfo, 'pnr' | 'status' | 'fare'>;
