import { Events } from '@/components/Events/Events';
import { Welcome } from '../components/Welcome/Welcome';
import classes from './Page.module.css';
import { FAQ } from '@/components/faq/Faq';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';

export default async function HomePage() {
  return (
    <>
      <div className={classes.container}>
        <Welcome />
        <Events />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
