"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Coffee, Crown, Flame, Heart, MapPin, Menu, MessageSquare, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Café Madrid"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Madrid Coffee Experience"
          description="Discover the finest coffee in the heart of Madrid, where tradition meets premium quality in every cup we serve."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant coffee shop interior in Madrid"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Born in the vibrant streets of Madrid, we bring you the perfect blend of Spanish tradition and modern coffee culture."
          tag="Our Story"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Premium Beans",
              description: "Carefully selected beans from the finest coffee regions worldwide",
              icon: Coffee
            },
            {
              title: "Expert Roasting",
              description: "Traditional Spanish roasting techniques perfected over generations",
              icon: Flame
            },
            {
              title: "Artisan Craftsmanship",
              description: "Every cup is crafted with passion and attention to detail",
              icon: Award
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7125616/pexels-photo-7125616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee beans roasting process"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Premium Coffee Selection"
          description="Savor the authentic taste of Madrid with our carefully curated coffee menu"
          tag="Menu"
          tagIcon={Menu}
          products={[
            {
              id: "espresso",
              brand: "Café Madrid",
              name: "Traditional Espresso",
              price: "€3.50",
              rating: 5,
              reviewCount: "450+",
              imageSrc: "https://images.pexels.com/photos/17312403/pexels-photo-17312403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium espresso coffee"
            },
            {
              id: "latte",
              brand: "Café Madrid",
              name: "Madrid Latte",
              price: "€4.20",
              rating: 5,
              reviewCount: "320+",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Latte with art"
            },
            {
              id: "cappuccino",
              brand: "Café Madrid",
              name: "Classic Cappuccino",
              price: "€3.80",
              rating: 5,
              reviewCount: "280+",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with foam art"
            },
            {
              id: "cortado",
              brand: "Café Madrid",
              name: "Spanish Cortado",
              price: "€3.60",
              rating: 5,
              reviewCount: "190+",
              imageSrc: "https://images.pexels.com/photos/16510925/pexels-photo-16510925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spanish cortado coffee"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Coffee Plans & Memberships"
          description="Choose the perfect plan for your coffee journey in Madrid"
          tag="Membership"
          tagIcon={Star}
          plans={[
            {
              id: "casual",
              badge: "Perfect Start",
              badgeIcon: Coffee,
              price: "€25/month",
              subtitle: "For occasional coffee lovers",
              features: [
                "5 premium coffees per month",
                "10% discount on pastries",
                "Free WiFi access",
                "Newsletter with coffee tips"
              ]
            },
            {
              id: "regular",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "€45/month",
              subtitle: "For daily coffee enthusiasts",
              features: [
                "15 premium coffees per month",
                "20% discount on all items",
                "Priority seating",
                "Free coffee tasting events",
                "Exclusive roast previews"
              ]
            },
            {
              id: "premium",
              badge: "Ultimate Experience",
              badgeIcon: Crown,
              price: "€75/month",
              subtitle: "For true coffee connoisseurs",
              features: [
                "Unlimited premium coffees",
                "30% discount on everything",
                "Private table reservation",
                "Monthly coffee masterclass",
                "Take-home coffee beans",
                "VIP event invitations"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from coffee lovers who visit us daily"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Elena Rodriguez",
              role: "Marketing Director",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elena Rodriguez customer portrait"
            },
            {
              id: "2",
              name: "Miguel Santos",
              role: "Architect",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6864505/pexels-photo-6864505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Miguel Santos customer portrait"
            },
            {
              id: "3",
              name: "Carmen López",
              role: "Student",
              company: "Universidad Complutense",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Carmen López customer portrait"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Martinez customer portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Visit Us"
          title="Experience Madrid's Best Coffee"
          description="Join our community of coffee lovers and stay updated with our latest blends, events, and exclusive offers."
          tagIcon={MapPin}
          inputPlaceholder="Your email address"
          buttonText="Stay Connected"
          termsText="By subscribing, you agree to receive our newsletter and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Café Madrid"
          copyrightText="© 2025 | Café Madrid - Premium Coffee Experience"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Selection", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Membership Plans", href: "pricing" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Coffee Process", href: "about" },
                { label: "Reviews", href: "testimonials" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Reservations", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}