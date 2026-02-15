import { Heart, Lightbulb, Target, TrendingUp, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VisionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              Our Vision & Mission
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Failure is Not the End—It's a New Beginning
            </h1>
            <p className="text-lg text-muted-foreground">
              At Mastermind Study Circle, we believe that every setback is an opportunity to grow stronger and every challenge is a chance to discover your true potential.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">A Message of Hope</h2>
            <p className="text-muted-foreground mb-6">
              Life doesn't always go according to plan. Sometimes we face setbacks in our education—whether due to personal circumstances, health issues, financial constraints, or simply because the traditional education system didn't work for us. These challenges can feel overwhelming, and it's natural to feel discouraged or even depressed when things don't work out as expected.
            </p>
            <p className="text-muted-foreground mb-6">
              But here's what we want you to know: <strong className="text-foreground">Your past does not define your future.</strong> A failed exam, a dropped year, or a break in your education does not mean you are a failure. It means you are human, and like all humans, you face challenges. What matters most is not that you fell, but that you choose to get back up.
            </p>
            <p className="text-muted-foreground mb-8">
              At Mastermind Study Circle, we have seen countless students who felt lost and hopeless transform their lives through education. We have witnessed the power of a second chance, and we are here to provide that chance to you.
            </p>

            <h2 className="text-3xl font-bold mb-6">How NIOS Helps You Continue Your Journey</h2>
            <p className="text-muted-foreground mb-8">
              The National Institute of Open Schooling (NIOS) is a blessing for students who need flexibility and a fresh start. Unlike traditional schooling systems, NIOS understands that life circumstances vary, and education should be accessible to everyone, regardless of their situation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flexible Learning Pace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Study at your own speed without the pressure of keeping up with a rigid schedule. NIOS allows you to take exams when you're ready, not when the calendar dictates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>No Age Restrictions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're 15 or 50, NIOS welcomes you. Education has no expiry date, and it's never too late to complete your schooling or learn something new.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Subject Choice Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose subjects that interest you and align with your career goals. You're not locked into a fixed stream—customize your education to suit your aspirations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Recognized Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NIOS certificates are recognized by all universities, employers, and government institutions in India, giving you the same opportunities as traditional school graduates.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Vision for You</h2>
            <p className="text-muted-foreground mb-6">
              We envision a world where no student is left behind because of circumstances beyond their control. Our vision is to create a supportive ecosystem where:
            </p>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Every student feels valued and capable of achieving their dreams, regardless of past setbacks</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Education is accessible, flexible, and tailored to individual needs and circumstances</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Students receive not just academic support, but emotional encouragement and practical guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Success is measured not by comparison with others, but by personal growth and achievement</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Moving Forward Together</h2>
            <p className="text-muted-foreground mb-6">
              If you're reading this and feeling uncertain about your future, please know that you are not alone. Thousands of students have walked this path before you, and thousands more will walk it after you. What makes the difference is taking that first step forward.
            </p>
            <p className="text-muted-foreground mb-6">
              Don't let temporary setbacks define your permanent identity. Don't let fear of failure prevent you from trying again. And most importantly, don't let anyone—including yourself—convince you that you're not capable of success.
            </p>
            <p className="text-muted-foreground">
              At Mastermind Study Circle, we are here to walk alongside you on this journey. We will celebrate your victories, support you through challenges, and remind you of your potential when you forget it yourself. Your education, your future, and your dreams are worth fighting for—and we're here to help you fight.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-8 md:p-10 text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Remember This</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "Success is not final, failure is not fatal: it is the courage to continue that counts." Your journey with NIOS is not just about getting a certificate—it's about proving to yourself that you can overcome obstacles and achieve your goals. We believe in you, and we're here to help you believe in yourself.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
