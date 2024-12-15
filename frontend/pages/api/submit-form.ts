import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityWriteClient } from '@/lib/sanityClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { formType, formData } = req.body

    // Format the formData for better readability
    const formattedData = Object.entries(formData)
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');

    // Create the form submission in Sanity
    await sanityWriteClient.create({
      _type: 'formSubmission',
      formType,
      submittedAt: new Date().toISOString(),
      formData: formattedData // Store the formatted data
    })

    res.status(200).json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error('Form submission error:', error)
    res.status(500).json({ message: 'Error submitting form' })
  }
}