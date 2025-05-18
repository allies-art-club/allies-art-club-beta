// app/api/resources/route.js
import { join } from 'path';
import { readFile } from 'fs/promises';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const filename = pathParts[pathParts.length - 1] + '.pdf';

    const filePath = join(process.cwd(), 'utils', 'resources', 'some-category', filename);
    const fileBuffer = await readFile(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'File not found', details: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
