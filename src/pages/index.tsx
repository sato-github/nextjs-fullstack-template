import { NextPageWithLayout } from './page';
import PrimaryLayout from '@components/templates/layouts/primary/PrimaryLayout';
import SearchForm from '@components/organisms/SearchForm/SearchForm';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/images/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <SearchForm />
      <p>
        Google offered in:{' '}
        <Link
          href="/"
          locale={locale === 'en' ? 'jp' : 'en'}
          className="underline text-blue-600"
        >
          English
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
