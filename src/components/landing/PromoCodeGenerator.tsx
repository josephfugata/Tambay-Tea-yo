'use client';

import { useState } from 'react';
import { generatePromoCode } from '@/ai/flows/generate-promo-code';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Ticket, Sparkles, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '../ui/badge';

const PromoCodeGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ promoCode: string; description: string } | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const promoDetails = {
        discountPercentage: Math.floor(Math.random() * 11) + 10, // 10% to 20%
        expirationDays: 7,
        promoCodeDescription: 'Isang espesyal na regalo para sa aming mga bisita online!',
      };

      const generatedResult = await generatePromoCode(promoDetails);
      setResult(generatedResult);
      toast({
        title: 'Ready na ang code mo!',
        description: 'Gamitin ito sa iyong susunod na pagbili sa tindahan.',
      });
    } catch (error) {
      console.error('Error generating promo code:', error);
      toast({
        variant: 'destructive',
        title: 'Ay, nako! May problema.',
        description: 'Hindi makabuo ng code. Pakisubukang muli.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="deals" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge>
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Deals
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Gusto mo ng Espesyal na Diskwento?
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            I-click ang button para gumawa ang aming AI ng unique promo code para lang sa\'yo!
            Ipakita ito sa counter para sa isang magandang deal sa iyong susunod na pagbisita.
          </p>
          <Button onClick={handleGenerate} disabled={isLoading} size="lg" className="mt-4">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Gumagawa...
              </>
            ) : (
              <>
                <Gift className="mr-2 h-5 w-5" />
                Kunin ang Aking Sorpresang Code!
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="mt-12 flex justify-center">
            <Card className="w-full max-w-md animate-in fade-in-50 zoom-in-95 shadow-lg">
              <CardHeader className="items-center text-center">
                <Ticket className="w-12 h-12 text-primary" />
                <CardTitle className="text-2xl font-bold">Narito na ang Iyong Code!</CardTitle>
                <CardDescription>
                  I-screenshot ito o ipakita sa counter.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="border-2 border-dashed border-primary bg-primary/10 rounded-lg p-4">
                  <p className="text-3xl font-extrabold tracking-widest text-primary-foreground/90 font-mono">
                    {result.promoCode}
                  </p>
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromoCodeGenerator;
