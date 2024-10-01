import { Events } from '@/components/Events/Events';
import { Welcome } from '../components/Welcome/Welcome';
import { FAQ } from '@/components/faq/Faq';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
// import { Schedule } from '@/components/Schedule/Schedule';

export default async function HomePage() {
  return (
    <>
        <Welcome />
        <Events />
        {/* <Schedule /> */}
        <FAQ />
        <Contact />
      <Footer />
    </>
  );
}
