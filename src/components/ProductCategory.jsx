import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProductCategory() {
  return (
    <div className="w-full max-w-7xl mx-auto p-10">
      <h2 className="text-5xl font-medium text-gray-900 dark:text-gray-100 mb-6">
        Shop By Category
      </h2>
      <Carousel className= "max-w-7xl mx-auto">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
              <h3 className="text-lg text-center font-semibold underline underline-offset-8 py-4 text-gray-900 dark:text-gray-100 mb-2">
                Zishan
              </h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    
  )
}
