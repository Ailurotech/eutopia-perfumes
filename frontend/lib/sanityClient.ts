import {createClient} from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'djpnf221',
  dataset: 'uat',
  useCdn: true,
  apiVersion: '2023-09-01',
});