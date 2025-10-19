"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { FolderOpen } from "lucide-react";
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/Spinner';
import Image from 'next/image';

export default function CollectionPage() {
  const { slug } = useParams(); 
  const [collection, setCollection] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const res = await fetch(`/api/collections/${slug}`);
          const data = await res.json();
  
          if (res.ok) {
            setCollection(data.collection);
            setProducts(data.products);
          } else {
            setCollection(null);
          }
        } catch (error) {
          console.error("Fetch collection error:", error);
          setCollection(null);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }
  }, [slug]);

  if (loading) {
    return <Spinner/>
  }

  if (!collection) {
    return <div className="text-center py-20 text-red-600">Collection not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 h-auto md:h-[400px] rounded-lg overflow-hidden mb-8 bg-forest-900/90 text-black p-8 bg-gray-100">
  
          {/* 📝 Left Side - Text Section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">{collection.name}</h2>
            <p className="text-base md:text-lg text-black max-w-md">
              {collection.shortDescription || "Discover our exclusive handmade rugs designed to bring warmth and timeless beauty to your space."}
            </p>
            
          </div>

          {/* 🖼️ Right Side - Image Section */}
          <div className="relative flex-1 h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={collection.image || "/placeholder.jpg"}
              alt={`${collection.name || "Collection"} banner`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

      <div className="mb-10 w-full ">

        

        {/* <p className="text-md text-forest-700 max-w-4xl">
          {collection.description}
        </p> */}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* <div className="flex items-center gap-2 mb-6">
          <FolderOpen className="h-5 w-5 text-forest-700" />
          <h1 className="text-3xl font-serif font-bold text-forest-800">{collection.name}</h1>
        </div> */}
        
        

        <div className="mb-10">
          <h2 className="text-2xl font-serif font-bold mb-6 text-forest-800">Products in this Collection</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* {  products.map(product => {
              let images = [];

              try {
                if (Array.isArray(product.images)) {
                  images = product.images;
                } else if (typeof product.images === "string") {
                  if (product.images.trim().startsWith("[")) {
                    images = JSON.parse(product.images);
                  } else {
                    images = [product.images]; // single image string
                  }
                }
              } catch (e) {
                console.error("Failed to parse images:", e);
              }
              return (<ProductCard
                key={product.id}
                id={product.slug}
                name={product.name}
                image={images[0]}
                hoverImage={
                  Array.isArray(product.images) && product.images[1]
                    ? product.images[1]
                    : null
                }
                category={product.category}
                colors={product.colors || []}
                sizes={product.sizes || []}
              />);
            } )} */}

                {products.flatMap((product) => {
                  let images = [];
            
                  try {
                    if (Array.isArray(product.images)) {
                      images = product.images;
                    } else if (typeof product.images === "string") {
                      if (product.images.trim().startsWith("[")) {
                        images = JSON.parse(product.images);
                      } else {
                        images = [product.images];
                      }
                    }
                  } catch (e) {
                    console.error("Failed to parse images:", e);
                  }
            
                  // ✅ color wise cards
                  if (Array.isArray(product.colors) && product.colors.length > 0) {
                    return product.colors.map((color, idx) => (
                      <ProductCard
                        key={`${product.id}-${idx}`}
                        productId={product.id}
                        id={product.slug}
                        name={`${product.name} - ${color.name}`} // ✅ name ke sath color bhi
                        image={color.images?.[0] || images[0]}   // ✅ color ka image
                        hoverImage={color.images?.[1] || images[1] || null}
                        category={product.category}
                        colors={product.colors}
                        badges={product.badges}
                        sizes={product.sizes || []}
                        selectedColor={color} // ✅ send complete color object
                      />
                    ));
                  }
            
                  // ✅ agar koi colors nahi hai
                  return (
                    <ProductCard
                      key={product.id}
                      productId={product.id}
                      id={product.slug}
                      name={product.name}
                      image={images[0]}
                      hoverImage={images[1] || null}
                      category={product.category}
                      colors={product.colors || []}
                      badges={product.badges}
                      sizes={product.sizes || []}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
