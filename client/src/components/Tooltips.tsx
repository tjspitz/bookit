import { Tooltip, TooltipProps } from 'react-bootstrap';

export const EmailTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>Please enter a valid email address.</Tooltip>
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
