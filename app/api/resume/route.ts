import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from "path";
// import { readFile } from "fs/promises";
import { NextResponse } from "next/server";

const filePath = path.resolve('.', 'public', 'Vansh-Anand-Resume.pdf');
const imageBuffer = fs.readFileSync(filePath);
// const pdfbuffer = await readFile(path.join(process.cwd(), "public/resume.pdf"));

export async function GET(req: NextApiRequest){
    const res = new NextResponse(imageBuffer);
    res.headers.set('Content-type', 'application/pdf');
    res.headers.set('Content-Disposition', 'attachment; filename=Vansh-Anand-Resume.pdf');
    return res;
}