import { Link } from '@tanstack/react-router';
import { BookOpen, Users, Award, ArrowRight, GraduationCap, Heart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useHomePageContent } from '../hooks/useSiteContent';

export default function HomePage() {
  const { headline, subheadline } = useHomePageContent();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit">
                <GraduationCap className="h-4 w-4" />
                NIOS Admission & Coaching Center
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {headline.includes('Educational Success') ? (
                  <>
                    Your Path to{' '}
                    <span className="text-primary">Educational Success</span>
                  </>
                ) : (
                  headline
                )}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                {subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/admissions">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/vision">Learn Our Vision</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/nios-hero-banner.dim_1600x600.png"
                alt="Students learning and achieving success"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Preview Section */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium">
            <Heart className="h-4 w-4" />
            Our Mission
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Never Give Up on Your Dreams
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Setbacks and failures are not the end—they're stepping stones to success. At Mastermind Study Circle, we help students overcome challenges and continue their educational journey with confidence and support.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/vision">
              Read Our Full Vision <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Mastermind Study Circle?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We provide comprehensive support to help you succeed in your NIOS journey
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Coaching</CardTitle>
                <CardDescription>
                  Experienced teachers providing personalized guidance for all NIOS subjects and streams
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Small Batch Sizes</CardTitle>
                <CardDescription>
                  Individual attention in small groups ensuring every student gets the support they need
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proven Results</CardTitle>
                <CardDescription>
                  Track record of helping students successfully complete their NIOS education
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flexible Learning</CardTitle>
                <CardDescription>
                  Study at your own pace with flexible schedules designed for working students
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Complete Admission Support</CardTitle>
                <CardDescription>
                  End-to-end assistance with NIOS admission process and documentation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Emotional Support</CardTitle>
                <CardDescription>
                  Counseling and motivation to help students overcome setbacks and stay focused
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-20">
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contact us today to learn more about our programs and how we can help you achieve your educational goals through NIOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/admissions">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/nios-streams">Explore NIOS Streams</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
