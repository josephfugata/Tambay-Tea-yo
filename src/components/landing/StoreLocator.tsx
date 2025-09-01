import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Navigation } from 'lucide-react';

const StoreLocator = () => {
  return (
    <section id="locations" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Tambay Tayo!
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Hinihintay ka namin! Hanapin ang aming cozy corner sa siyudad, ang perfect
            place para mag-relax, makipagkwentuhan, o magtrabaho.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-primary" />
                Ang Aming Flagship Store
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium">123 Masaya St., Maligaya, Quezon City</p>
                  <p className="text-sm text-muted-foreground">Philippines</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium">Bukas Araw-Araw</p>
                  <p className="text-sm text-muted-foreground">10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <Button asChild className="w-full md:w-auto">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-4 w-4" /> Kumuha ng Direksyon
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="w-full aspect-square lg:aspect-[4/3] rounded-xl bg-muted overflow-hidden">
          <div className="w-full h-full bg-secondary/50 flex items-center justify-center relative">
            {/* Fake map UI */}
            <div className="w-full h-full absolute bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 border-2 border-primary/50 rounded-full animate-ping"></div>
            </div>
             <p className="absolute bottom-4 text-xs text-muted-foreground">Ang mapa ay para sa ilustrasyon lamang.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
