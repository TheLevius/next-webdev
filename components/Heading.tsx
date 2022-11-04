import { ComponentType, FC, ReactNode } from 'react';

type HeadingProps = {
    text?: string;
    tag?: ComponentType | keyof JSX.IntrinsicElements;
}
const Heading: FC<HeadingProps> = ({ tag = 'h1', text = 'empty' }) => {
  const Tag = tag;
  return <Tag>{text}</Tag>;
};

export default Heading;
