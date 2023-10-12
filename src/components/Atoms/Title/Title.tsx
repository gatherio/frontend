import "./Title.scss";

type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <div className="title">{children}</div>;
};

export default Title;
