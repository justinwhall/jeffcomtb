// @ts-nocheck
import { redirect } from 'next/navigation';

const REDIRECTS = {
  apex: 'https://www.google.com/maps/dir//121+Heritage+Rd,+Golden,+CO+80401/@39.7153801,-105.2916042,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876b84c7cd2cab4d:0x79a1f8fefd947043!2m2!1d-105.2092033!2d39.7154092?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
  'maryland-mountain': 'https://www.google.com/maps/dir//maryland+mountain+parking+lot/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876bbd444f7beb73:0xd0d2f7ac82dd2d6?sa=X&ved=1t:3061&ictx=111',
  'three-sisters': "https://www.google.com/maps/place/39%C2%B038'08.3%22N+105%C2%B019'50.8%22W/@39.63564,-105.33077,17z/data=!3m1!4b1!4m4!3m3!8m2!3d39.63564!4d-105.33077?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  'virginia-canyon': 'https://www.google.com/maps/dir/39.726481,-105.212777/shelly+quinn+ball+field/@39.7249737,-105.5903261,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x876ba350abe86eef:0xae762b3aac498d93!2m2!1d-105.4943713!2d39.7410038?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D',
};

export default async function Redirect(props) {
  const { rideName } = props.params;

  redirect(REDIRECTS[rideName]);
}
