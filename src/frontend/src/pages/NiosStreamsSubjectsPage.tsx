import { BookOpen, Beaker, Calculator, Globe, Palette, Languages } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NiosStreamsSubjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              NIOS Streams & Subjects
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Explore the wide range of academic streams and subjects offered by the National Institute of Open Schooling
            </p>
            <p className="text-sm text-muted-foreground">
              Source:{' '}
              <a
                href="https://nios.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                https://nios.ac.in
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">About NIOS Programs</h2>
            <p className="text-muted-foreground mb-4">
              NIOS offers flexible education programs at Secondary (Class 10) and Senior Secondary (Class 12) levels. Students can choose from three main streams at the Senior Secondary level, with the freedom to select subjects based on their interests and career goals.
            </p>
            <p className="text-muted-foreground">
              The unique feature of NIOS is that you can mix subjects from different streams, allowing for a truly personalized education experience.
            </p>
          </div>

          {/* Streams Overview Cards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Academic Streams</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Beaker className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Science Stream</CardTitle>
                  <CardDescription>
                    For students interested in medicine, engineering, research, and technology careers
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Commerce Stream</CardTitle>
                  <CardDescription>
                    For students pursuing careers in business, finance, accounting, and economics
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Humanities Stream</CardTitle>
                  <CardDescription>
                    For students interested in arts, social sciences, literature, and humanities
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Detailed Subject Lists */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Subject Details by Stream</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Science Stream */}
              <AccordionItem value="science" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Beaker className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Science Stream Subjects</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Science Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Physics - Study of matter, energy, and their interactions</li>
                        <li>• Chemistry - Study of substances, their properties, and reactions</li>
                        <li>• Biology - Study of living organisms and life processes</li>
                        <li>• Mathematics - Essential for engineering and scientific careers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Additional Options:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Computer Science - Programming and information technology</li>
                        <li>• Environmental Science - Study of environment and ecology</li>
                        <li>• Home Science - Nutrition, health, and family welfare</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Commerce Stream */}
              <AccordionItem value="commerce" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Commerce Stream Subjects</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Commerce Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Accountancy - Financial record keeping and analysis</li>
                        <li>• Business Studies - Principles of business management</li>
                        <li>• Economics - Study of production, distribution, and consumption</li>
                        <li>• Mathematics - Business mathematics and statistics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Additional Options:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Computer Science - IT applications in business</li>
                        <li>• Entrepreneurship - Starting and managing businesses</li>
                        <li>• Banking - Banking operations and financial services</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Humanities Stream */}
              <AccordionItem value="humanities" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Humanities Stream Subjects</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Humanities Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• History - Study of past events and civilizations</li>
                        <li>• Geography - Study of earth, environment, and human societies</li>
                        <li>• Political Science - Government, politics, and public policy</li>
                        <li>• Sociology - Study of society and social behavior</li>
                        <li>• Psychology - Study of mind and behavior</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Additional Options:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Economics - Economic theory and applications</li>
                        <li>• Home Science - Family and community welfare</li>
                        <li>• Painting - Visual arts and creative expression</li>
                        <li>• Mass Communication - Media and communication studies</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Language Subjects */}
              <AccordionItem value="languages" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Languages className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Language Subjects (All Streams)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Available Languages:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• English - Essential for higher education and careers</li>
                        <li>• Hindi - National language of India</li>
                        <li>• Sanskrit - Classical language and literature</li>
                        <li>• Urdu - Language and literature</li>
                        <li>• Bengali, Gujarati, Marathi, Punjabi, Tamil, Telugu, and more</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Note: Students typically need to choose at least one language subject. English is highly recommended for higher education opportunities.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Secondary Level */}
              <AccordionItem value="secondary" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Secondary Level (Class 10) Subjects</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• English / Hindi (Language)</li>
                        <li>• Mathematics</li>
                        <li>• Science (Physics, Chemistry, Biology)</li>
                        <li>• Social Science (History, Geography, Political Science, Economics)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Additional Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Computer Science</li>
                        <li>• Home Science</li>
                        <li>• Business Studies</li>
                        <li>• Data Entry Operations</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Key Features */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Key Features of NIOS Subject Selection</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Subject Combination</h4>
                  <p className="text-sm text-muted-foreground">
                    Mix subjects from different streams based on your interests and career goals
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                  <Palette className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Vocational Courses</h4>
                  <p className="text-sm text-muted-foreground">
                    NIOS also offers vocational courses for skill development and employment
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                  <Calculator className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">On-Demand Exams</h4>
                  <p className="text-sm text-muted-foreground">
                    Take exams when you're ready, with multiple exam sessions throughout the year
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Recognized Certification</h4>
                  <p className="text-sm text-muted-foreground">
                    NIOS certificates are recognized nationwide for higher education and employment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Source Attribution */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              For complete and up-to-date information about NIOS programs, subjects, and admission procedures, please visit the official NIOS website:{' '}
              <a
                href="https://nios.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                https://nios.ac.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
