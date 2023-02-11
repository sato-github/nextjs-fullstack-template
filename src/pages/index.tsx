import { NextPageWithLayout } from './page';
import PrimaryLayout from '@components/templates/layouts/primary/PrimaryLayout';
import SearchForm from '@components/organisms/SearchForm/SearchForm';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      logo
      <SearchForm />
      launguage
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
