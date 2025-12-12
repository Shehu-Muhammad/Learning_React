interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <div className={'btn btn-' + text}>
      {text.charAt(0).toLocaleUpperCase() + text.slice(1)}
    </div>
  );
};

export default Button;
