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
    Password must contain at least one character of each type &#40;a-z&#41;, &#40;A-Z&#41;, &#40;0-9&#41;,
    and &#40;~ ! @ # $ % ^ & *&#41;.
    Password must be 8 to 12 characters long.
  </Tooltip>
);

export const LoginBtnTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>
    Please provide valid entries for email address and password.
  </Tooltip>
);
