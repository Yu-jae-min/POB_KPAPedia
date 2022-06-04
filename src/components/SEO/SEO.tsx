import { Helmet, HelmetProvider } from 'react-helmet-async';

interface ITitleType {
  title: string;
}

const SEO = ({ title }: ITitleType) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
