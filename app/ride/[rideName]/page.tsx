import { redirect } from 'next/navigation';

const REDIRECTS = {
  apex: 'https://www.google.com/maps/dir//121+Heritage+Rd,+Golden,+CO+80401/@39.7153801,-105.2916042,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876b84c7cd2cab4d:0x79a1f8fefd947043!2m2!1d-105.2092033!2d39.7154092?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
  'mayland-mountain': 'https://www.google.com/maps/dir//maryland+mountain+parking+lot/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876bbd444f7beb73:0xd0d2f7ac82dd2d6?sa=X&ved=1t:3061&ictx=111',
};

export default async function Redirect(props) {
  const { rideName } = props.params;

  redirect(REDIRECTS[rideName]);
}
