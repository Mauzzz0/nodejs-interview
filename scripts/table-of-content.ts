import { readFileSync } from 'node:fs';

const createAnchorLink = (ref: string) => {
  return `[${ref}](#${ref.replace('.', '')})`;
};

const main = () => {
  const readmeContent = readFileSync('../livecoding.md', 'utf8');

  const headingRegex = /(#{1,6})\s+(.*)/gm;
  const headings: { level: number; text: string }[] = [];
  let match;

  while ((match = headingRegex.exec(readmeContent)) !== null) {
    const level = match[1].length;
    const text = match[2].trim().replace(/\s+/g, '-');

    headings.push({ level, text });
  }

  let h1count = 0;
  let tableOfContent = '';
  for (const heading of headings) {
    const { level, text } = heading;

    if (level === 1) {
      tableOfContent += `${++h1count}. ${createAnchorLink(text)}\n`;
      continue;
    }

    tableOfContent += `${'\t'.repeat(level - 1)}* ${createAnchorLink(text)}\n`;
  }

  console.log(tableOfContent);
};

main();
