import { NextResponse } from 'next/server';
import data from '../../../src/shared/mock/main-page.json';

export async function GET() {
  return NextResponse.json(data);
}
