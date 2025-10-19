"use client" 
import React, {useState} from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'react-toastify';

const Newsletter = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubscribe = async(e)=> {
      e.preventDefault();
      try {
        const response = await fetch('api/subscribers', {
          method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        console.log(data);
        
        if(response.ok) {
          toast.success("Thanks for subscribing!");
          setEmail('');

        }else {
          toast.error(data.error);
        }
      } catch (error) {
        
        toast.error(error.message);
      }
  }


  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Join Our Design Community
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Subscribe to receive exclusive offers, design inspiration, and new collection previews
          </p>
          
           <form onSubmit={handleSubscribe}>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
           
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground border-0"
            />
            <Button 
              size="lg" 
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0"
            >
              Subscribe
            </Button>
            
          </div>
          </form>
          
          <p className="text-sm mt-4 text-primary-foreground/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
