export interface ButtonProps {
  className?: string;
  content?: string;
  onClick?: Function;
}

const Button = ({ className="", content="", onClick=() => void 1 }: ButtonProps): JSX.Element => {

  return <button className={className} onClick={() => onClick}>{content}</button>;

};
export default Button;