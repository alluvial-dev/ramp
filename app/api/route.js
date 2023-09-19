// export const runtime = 'edge'; // 'nodejs' is the default

import { NextResponse } from 'next/server';
const jsp = require('js-prototype-lib')
jsp.install('string')

export function GET(request) {
	return NextResponse.json({
		body: request.body,
		query: request.nextUrl.search.substr(1).keyval('=', '&'),
		cookies: request.cookies.getAll(),
		referrer: request.referrer
	}, {
		status: 200,
	})
}
