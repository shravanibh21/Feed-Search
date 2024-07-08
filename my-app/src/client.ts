import {createClient} from '@sanity/client';

const sanityClient = createClient({
  projectId: '1oobv90f',
  dataset: 'production',
  useCdn: false,
  apiVersion: "2024-06-11",
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export default sanityClient;