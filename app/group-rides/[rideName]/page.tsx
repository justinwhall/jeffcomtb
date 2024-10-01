// @ts-nocheck
import React from 'react';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { Title } from '@mantine/core';
import Link from 'next/link';

async function getMarkdownContent(slug) {
  const filePath = path.join(process.cwd(), 'ride-descriptions', `${slug}.md`);

  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return null;
  }
}

function extractH1AndContent(markdownContent) {
  const h1Match = markdownContent.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1] : '';
  const content = h1Match ? markdownContent.replace(h1Match[0], '').trim() : markdownContent;
  return { title, content };
}

export default async function DynamicMarkdownRenderer({ params }) {
  const slug = Array.isArray(params.rideName) ? params.rideName.join('/') : params.rideName;
  const rawContent = await getMarkdownContent(slug);

  if (!rawContent) {
    notFound();
  }

  const { title, content } = extractH1AndContent(rawContent);

  return (
    <div className="markdown-content">
        <Link href="/#all-rides">Back</Link>
        <Title ta="center" size={45} c="cyan" mt={30}>
          {title}
        </Title>
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
