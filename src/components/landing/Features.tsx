import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

interface FeatureProps {
  title: string
  description: string
  image: string
}

const features: FeatureProps[] = [
  {
    title: 'Responsive Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/assets/looking-ahead.png',
  },
  {
    title: 'Intuitive user interface',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/assets/reflecting.png',
  },
  {
    title: 'AI-Powered insights',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/assets/growth.png',
  },
]

const featureList: string[] = [
  'Dark/Light theme',
  'Reviews',
  'Features',
  'Pricing',
  'Contact form',
  'Our team',
  'Responsive design',
  'Newsletter',
  'Minimalist',
]

export const Features = () => {
  return (
    <section id="features" className="container space-y-8 py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-center lg:text-4xl">
        Many{' '}
        <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap gap-4 md:justify-center">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                width={300}
                height={300}
                src={image}
                alt="About feature"
                className="mx-auto w-[200px] lg:w-[300px]"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
