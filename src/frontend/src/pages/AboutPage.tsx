import { BookOpen, Users, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              About Mastermind Study Circle
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a dedicated NIOS admission and coaching center committed to helping students succeed through the National Institute of Open Schooling (NIOS) program.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground mb-6">
              Mastermind Study Circle is more than just a coaching center—we are a community dedicated to providing second chances and new opportunities for students who need flexible, quality education. Our institute specializes in NIOS admission guidance and comprehensive coaching for all streams and subjects offered by the National Institute of Open Schooling.
            </p>
            <p className="text-muted-foreground mb-8">
              Founded with the belief that every student deserves the opportunity to complete their education, we have helped hundreds of students overcome obstacles and achieve their academic goals. Our experienced faculty and personalized approach ensure that each student receives the attention and support they need to succeed.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-muted-foreground mb-8">
              We understand that students come to NIOS for various reasons—some need flexible schedules due to work commitments, others are looking for a fresh start after setbacks in traditional schooling. Whatever your situation, we provide:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Comprehensive Curriculum Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert teaching across all NIOS subjects with study materials, practice tests, and regular assessments to track your progress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Small batch sizes and one-on-one mentoring sessions ensure that every student's unique learning needs are addressed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple batch timings including weekend and evening classes to accommodate working students and those with other commitments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Complete Support System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From admission guidance to exam preparation, we're with you every step of the way on your educational journey.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-muted-foreground mb-6">
              At Mastermind Study Circle, we are committed to creating an environment where every student feels valued, supported, and empowered to succeed. We understand that choosing NIOS often comes with its own set of challenges and emotions, and we're here to provide not just academic coaching, but also the encouragement and guidance you need to stay motivated.
            </p>
            <p className="text-muted-foreground">
              Our success is measured by your success. When you achieve your educational goals, complete your NIOS certification, and move forward with confidence toward your dreams, that's when we know we've fulfilled our mission. Join us, and let's work together to turn your educational aspirations into reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
