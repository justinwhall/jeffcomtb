import { NextResponse } from 'next/server';

export async function GET() {
  await fetch('https://api.vercel.com/v1/integrations/deploy/prj_ewkj5F73FDfMWDLQDokoLCY4Ujbk/82MFZOuhed');

  return NextResponse.json({ ok: true });
}
