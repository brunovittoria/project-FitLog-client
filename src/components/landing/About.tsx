import Image from 'next/image'
import { Statistics } from './Statistics'

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 rounded-lg border py-12">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <Image
            src="/assets/pilot.png"
            alt="Pilot illustration"
            width={300}
            height={300}
            className="rounded-lg object-contain"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
                  About{' '}
                </span>
                Company
              </h2>
              <p className="text-muted-foreground mt-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  )
}
