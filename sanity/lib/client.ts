import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, revalidateSecret, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
    useCdn: revalidateSecret ? false : true,
  perspective: 'published'
})
