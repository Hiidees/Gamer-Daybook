import { Helmet, HelmetData } from "react-helmet-async";
export interface IHelmetProps {
  title: string;
}

export function MyHelmet(props: IHelmetProps) {
  const { title } = props;
  const helmetData = new HelmetData({});

  return (
    <Helmet helmetData={helmetData}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" />
    </Helmet>
  );
}
