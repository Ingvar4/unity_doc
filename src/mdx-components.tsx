import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';

function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path.startsWith('/')) return path;
  return `${basePath}${path}`;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    img: ({ src, alt, ...props }) => {
      const fixedSrc = typeof src === 'string' ? withBasePath(src) : src;

      return <img src={fixedSrc} alt={alt ?? ''} {...props} />;
    },
  };
}