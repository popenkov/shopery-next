import { NextRequest, NextResponse } from 'next/server';
import data from '../../../src/shared/mock/main-page.json';

export async function GET(request: NextRequest) {
  return NextResponse.json(data);
}
