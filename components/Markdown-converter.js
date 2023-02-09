import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Robart

This is some text.

## This is a subheading

This is some more text.
`;

function MarkdownRenderer() {
  return <ReactMarkdown source={markdown} />;
}

export default MarkdownRenderer;