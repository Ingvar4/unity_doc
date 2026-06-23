// import defaultMdxComponents from 'fumadocs-ui/mdx';
// import type { MDXComponents } from 'mdx/types';

// export function getMDXComponents(components?: MDXComponents) {
//   return {
//     ...defaultMdxComponents,
//     ...components,
//   } satisfies MDXComponents;
// }

// export const useMDXComponents = getMDXComponents;

// declare global {
//   type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
// }
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

function withBasePath(src?: string) {
  // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const basePath = '/unity_doc';
  
  if (!src) return src;
  if (!src.startsWith('/')) return src;
  if (!basePath) return src;
  if (src.startsWith(`${basePath}/`)) return src;

  return `${basePath}${src}`;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    img: ({ src, alt, ...props }) => (
      <img
        {...props}
        src={typeof src === 'string' ? withBasePath(src) : src}
        alt={alt ?? ''}
      />
    ),
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}