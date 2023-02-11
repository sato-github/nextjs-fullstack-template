import Footer from '@components/organisms/Footer/Footer';
import Header from '@components/organisms/Header/Header';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
  children: React.ReactNode;
}

const PrimaryLayout = ({
  children,
  justify = 'items-center',
  ...rest
}: IPrimaryLayout) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...rest} className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
