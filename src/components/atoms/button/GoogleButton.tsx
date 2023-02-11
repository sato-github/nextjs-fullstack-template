export type ButtonType = 'submit' | 'reset' | 'button';

export type GoogleButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    type?: ButtonType;
  };

const GoogleButton = ({
  type = 'submit',
  label,
  ...rest
}: GoogleButtonProps) => {
  return (
    <button type={type} className="btn-primary" {...rest}>
      {label}
    </button>
  );
};

export default GoogleButton;
