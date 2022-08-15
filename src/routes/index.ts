import type { RequestEvent } from "@sveltejs/kit";
import busboy from "busboy";
import { Readable } from "node:stream";
import path from 'node:path';
import fs from 'node:fs';

export async function POST({request}: RequestEvent) {
  await new Promise((resolve) => {
    const bb = busboy({
      headers: { 'content-type': request.headers.get('content-type') as string }
    });
    bb.on('file', (name, file, info) => {
      const {filename, encoding, mimeType } = info;
      const saveTo = path.join('tmp', filename);
      file.pipe(fs.createWriteStream(saveTo));
    });
    bb.on('finish', () => resolve(request.body));

    const readable = Readable.fromWeb(request.body);
    readable.pipe(bb);
  });


  return {

  }
}