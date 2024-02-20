import { Tooltip, TooltipProps } from 'react-bootstrap';

export const BookingTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>Book a new ticket!</Tooltip>
);

export const EmailTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>Please enter a valid email address.</Tooltip>
);

export const NameTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>
    Names may only contain letters and hyphens &#40;&#45;&#41;.
  </Tooltip>
);

export const StationTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>Please select an available station.</Tooltip>
);

export const DateTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>You must book at least one day in advance.</Tooltip>
);

export const TrainNoTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>
    Valid train identifiers must be exactly seven characters long.
    They may only contain letters and numbers.
  </Tooltip>
);

export const PasswordTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>
    Passwords must be 6 to 12 characters long.
    They may contain characters (a-z), (A-Z), (0-9),
    or (~ ! @ # $ % ^ & *).
  </Tooltip>
);