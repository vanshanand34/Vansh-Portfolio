// import type { NextApiRequest } from "next";
import fs from 'fs';
import path from "path";
// import { readFile } from "fs/promises";
import { NextResponse } from "next/server";

const filePath = path.resolve('.', 'public', 'vansh-overall-june.pdf');
const imageBuffer = fs.readFileSync(filePath);
// const pdfbuffer = await readFile(path.join(process.cwd(), "public/resume.pdf"));

export async function GET(){
    const res = new NextResponse(imageBuffer as BodyInit);
    res.headers.set('Content-type', 'application/pdf');
    res.headers.set('Content-Disposition', 'attachment; filename=Vansh-Anand-Resume.pdf');
    return res;
}