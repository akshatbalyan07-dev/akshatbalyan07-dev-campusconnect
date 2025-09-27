import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

  return (
    <div>
      <section className="relative w-full h-64 md:h-80 bg-secondary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Get in Touch</h1>
          <p className="max-w-2xl mt-4 text-lg text-muted-foreground">
            We're here to help. Whether you have a question, feedback, or need to report an issue, find the right way to reach us.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>General Inquiry</CardTitle>
              <CardDescription>
                Have a question about Campus Hub? Fill out the form below and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@university.edu" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Question about events" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-destructive">Report an Accessibility Issue</CardTitle>
              <CardDescription className="text-destructive/80">
                We are committed to making Campus Hub accessible to everyone. Please let us know if you encounter any barriers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accessibility-page">Page with Issue</Label>
                  <Input id="accessibility-page" placeholder="e.g., /events or /clubs" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accessibility-description">Description of Issue</Label>
                  <Textarea id="accessibility-description" placeholder="Describe the problem you're facing..." rows={5} />
                </div>
                <Button type="submit" variant="destructive">Submit Report</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
