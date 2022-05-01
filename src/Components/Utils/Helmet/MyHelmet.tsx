import { Helmet } from "react-helmet";
export interface IHelmetProps {
  title: string;
}

export function MyHelmet(props: IHelmetProps) {
  const { title } = props;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" />
    </Helmet>
  );
}
