import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '@types';
import { SearchForm } from '@components/organisms';
import { PrimaryLayout } from '@components/templates';

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
