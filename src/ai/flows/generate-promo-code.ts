'use server';

/**
 * @fileOverview Promo code generator flow.
 *
 * - generatePromoCode - A function that generates a unique promo code for in-store discounts.
 * - GeneratePromoCodeInput - The input type for the generatePromoCode function.
 * - GeneratePromoCodeOutput - The return type for the generatePromoCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePromoCodeInputSchema = z.object({
  discountPercentage: z
    .number()
    .describe('The percentage of discount to apply to the promo code.'),
  expirationDays: z
    .number()
    .describe('The number of days until the promo code expires.'),
  promoCodeDescription: z
    .string()
    .describe(
      'A brief description of the promotion for which the promo code is generated.'
    ),
});
export type GeneratePromoCodeInput = z.infer<typeof GeneratePromoCodeInputSchema>;

const GeneratePromoCodeOutputSchema = z.object({
  promoCode: z.string().describe('The generated unique promo code.'),
  description: z
    .string()
    .describe('A detailed description of the generated promo code.'),
});
export type GeneratePromoCodeOutput = z.infer<typeof GeneratePromoCodeOutputSchema>;

export async function generatePromoCode(
  input: GeneratePromoCodeInput
): Promise<GeneratePromoCodeOutput> {
  return generatePromoCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePromoCodePrompt',
  input: {schema: GeneratePromoCodeInputSchema},
  output: {schema: GeneratePromoCodeOutputSchema},
  prompt: `You are a marketing expert specializing in creating promo codes for a Pinoy milk tea shop.

You will generate a unique, single-use promo code with a discount of {{discountPercentage}}% that expires in {{expirationDays}} days. The promo code is for the following promotion: {{promoCodeDescription}}.

The promo code should be easy to remember and relevant to the promotion.

Here's an example: DISCOUNT20

Return a JSON object in the following format:
{
  "promoCode": "YOUR_PROMO_CODE",
  "description": "A detailed description of the promo code including the discount percentage, expiration date, and promotion details."
}
`,
});

const generatePromoCodeFlow = ai.defineFlow(
  {
    name: 'generatePromoCodeFlow',
    inputSchema: GeneratePromoCodeInputSchema,
    outputSchema: GeneratePromoCodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
