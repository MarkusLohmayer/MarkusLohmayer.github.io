
import { publications, type Publication } from '../publications';
import { error } from '@sveltejs/kit';


export const load = ({ params }) => {
    const idx   = publications.findIndex((item) => item.slug === params.slug);
    if (idx === -1) throw error(404, 'Not found');
    const item = publications[idx] as Publication;
    const prev = publications[idx - 1] ?? undefined;
    const next = publications[idx + 1] ?? undefined;
    return {
      item: item,
      prev: prev && { label: prev.title, href: `/research/${prev.slug}` },
      next: next && { label: next.title, href: `/research/${next.slug}` },
    };
  };
