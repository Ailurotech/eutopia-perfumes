import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'djpnf221',  
  dataset: 'uat',         
  useCdn: true,           
  apiVersion: '2023-09-21', 
});

export default client;
