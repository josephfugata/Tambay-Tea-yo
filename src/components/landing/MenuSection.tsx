import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const menuItems = [
  {
    name: 'Classic Pearl Milk Tea',
    description: 'The timeless original. Creamy, rich black tea with perfectly chewy tapioca pearls.',
    price: '₱100',
    image: 'https://images.unsplash.com/photo-1575417634984-8e608b88a04b?w=500&auto=format&fit=crop&q=60',
    hint: 'classic milk-tea',
    isBestseller: true,
  },
  {
    name: 'Taro Dream',
    description: 'A vibrant and earthy delight. Real taro paste blended for a smooth, satisfying experience.',
    price: '₱120',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60',
    hint: 'taro milk-tea',
    isBestseller: true,
  },
  {
    name: 'Okinawa Brown Sugar',
    description: 'A decadent treat with roasted brown sugar syrup, fresh milk, and signature pearls.',
    price: '₱125',
    image: 'https://images.unsplash.com/photo-1575417634984-8e608b88a04b?w=500&auto=format&fit=crop&q=60',
    hint: 'brown-sugar milk-tea',
    isBestseller: false,
  },
  {
    name: 'Matcha Cheesecake',
    description: 'Earthy premium matcha topped with a layer of rich, salty-sweet cream cheese foam.',
    price: '₱135',
    image: 'https://images.unsplash.com/photo-1575417634984-8e608b88a04b?w=500&auto=format&fit=crop&q=60',
    hint: 'matcha milk-tea',
    isBestseller: true,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
             <Badge variant="secondary" className="text-sm">Our Menu</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Taste the Happiness
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Crafted with premium ingredients and a whole lot of love. Here are some of our fan favorites!
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <Card key={item.name} className="flex flex-col overflow-hidden group">
              <CardHeader className="p-0 relative">
                 <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={item.hint}
                />
                {item.isBestseller && (
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Best Seller</Badge>
                )}
              </CardHeader>
              <CardContent className="pt-6 flex-1">
                <CardTitle className="text-xl font-headline mb-2">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-lg font-bold text-primary">{item.price}</p>
                <Button>Add to Order</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
