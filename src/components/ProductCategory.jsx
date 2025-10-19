"use client";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Spinner from "./Spinner";
import Link from "next/link";


export function ProductCategory() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const res = await fetch('/api/collections', { cache: "no-store" });
        // const res = await fetch('/api/collections', { next: { revalidate: 60 } });
        const data = await res.json();
  
        if (Array.isArray(data)) {
          // ✅ Sirf wahi collections jinka isFeatured === 1 hai
        const featuredCollections = data.filter(
          (item) => item.isFeatured === 1 || item.isFeatured === "1"
        );
        setCollections(featuredCollections);
          // setCollections(data);
        } else {
          console.error("Invalid API response:", data);
          setCollections([]);
        }
      } catch (error) {
        console.error('Failed to fetch collections', error);
        setCollections([]);
      } finally {
        setLoading(false); // ye zaroori hai
      }
    };
    fetchCollection();
  }, []);
  

  return (
    <div className="w-full max-w-7xl mx-auto p-10">
      <h2 className="text-5xl font-medium text-gray-900 dark:text-gray-100 mb-6">
        Shop By Category
      </h2>

      {loading ? (
        <Spinner />
      ):
      <Carousel className= "max-w-7xl mx-auto">
      <CarouselContent className="">
        {Array.isArray(collections) && collections.map((category, index) => (
          
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <Link 
              key={category.slug}
                href={`/collection/${category.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
            <div className="group relative cursor-pointer">
                <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="relative aspect-square">
                    <Image
                      src={category.image || "/placeholder.jpg"}
                      alt={category.name || "Category Image"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </CardContent>
                </Card>

                {/* Category Name Overlay Below Card */}
                <h3 className="text-center text-lg font-semibold underline underline-offset-4 mt-4 text-gray-900 dark:text-gray-100">
                  {category.name}
                </h3>
              </div>
              </Link>
          </CarouselItem>

        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
      }
    </div>
    
  )
}
