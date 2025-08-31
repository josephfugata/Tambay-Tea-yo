'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import MilkTeaCupIcon from '../icons/MilkTeaCupIcon';
import BobaPearlIcon from '../icons/BobaPearlIcon';
import { Badge } from '../ui/badge';
import { Check, Plus, Sparkles } from 'lucide-react';

const allToppings = [
  { id: 'pearls', name: 'Tapioca Pearls', price: 15, icon: <BobaPearlIcon className="w-4 h-4" /> },
  { id: 'pudding', name: 'Pudding', price: 20, icon: <div className="w-3 h-3 rounded-sm bg-yellow-300" /> },
  { id: 'grass_jelly', name: 'Grass Jelly', price: 15, icon: <div className="w-3 h-3 bg-black" /> },
  { id: 'cheese_foam', name: 'Cheese Foam', price: 25, icon: <div className="w-3 h-3 rounded-full bg-orange-100 border border-orange-200" /> },
  { id: 'oreo_crush', name: 'Oreo Crush', price: 20, icon: <div className="w-3 h-3 rounded-full bg-gray-600" /> },
];

const basePrice = 100;

const ToppingPicker = () => {
  const [selectedToppings, setSelectedToppings] = useState<typeof allToppings>([]);

  const toggleTopping = (topping: typeof allToppings[0]) => {
    setSelectedToppings((prev) =>
      prev.some((t) => t.id === topping.id)
        ? prev.filter((t) => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const totalPrice = selectedToppings.reduce((total, topping) => total + topping.price, basePrice);

  const isSelected = (topping: typeof allToppings[0]) => {
    return selectedToppings.some((t) => t.id === topping.id);
  };

  return (
    <section id="customizer" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge variant="outline"><Sparkles className="mr-2 h-4 w-4 text-primary" />Interactive</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Create Your Perfect Drink
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unleash your creativity! Mix and match our delicious toppings to build your dream boba concoction.
            </p>
          </div>
        </div>
        <Card className="w-full max-w-4xl mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex items-center justify-center bg-secondary/50 relative">
              <MilkTeaCupIcon className="w-auto h-80" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-28 h-40">
                {/* Visual Toppings */}
                {isSelected(allToppings[0]) && <BobaPearlIcon className="text-black absolute bottom-2 left-3 w-5 h-5 animate-bounce" style={{animationDelay: '0.1s'}} />}
                {isSelected(allToppings[0]) && <BobaPearlIcon className="text-black absolute bottom-5 left-10 w-4 h-4 animate-bounce" />}
                {isSelected(allToppings[0]) && <BobaPearlIcon className="text-black absolute bottom-1 left-20 w-6 h-6 animate-bounce" style={{animationDelay: '0.2s'}} />}
                {isSelected(allToppings[2]) && <div className="w-5 h-5 bg-black absolute bottom-12 left-5 rounded-sm animate-pulse" />}
                {isSelected(allToppings[1]) && <div className="w-6 h-6 bg-yellow-300 absolute bottom-16 left-16 rounded-md animate-pulse" style={{animationDelay: '0.3s'}} />}
                {isSelected(allToppings[3]) && <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-orange-100 to-transparent " />}
                {isSelected(allToppings[4]) && <div className="absolute top-8 w-full h-2 bg-gray-600/10" />}

              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-headline">Your Custom Creation</CardTitle>
                <CardDescription>Select your favorite toppings.</CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Toppings:</h3>
                  <div className="flex flex-wrap gap-2">
                    {allToppings.map((topping) => (
                      <Button
                        key={topping.id}
                        variant={isSelected(topping) ? 'default' : 'secondary'}
                        onClick={() => toggleTopping(topping)}
                        className="flex items-center gap-2"
                      >
                        {isSelected(topping) ? <Check className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
                        {topping.icon}
                        {topping.name} (+₱{topping.price})
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 mt-8 flex-col items-start gap-4">
                <div className="text-2xl font-bold">
                  Total Price: <span className="text-primary">₱{totalPrice.toFixed(2)}</span>
                </div>
                <Button size="lg" className="w-full">Add to My Order</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ToppingPicker;
