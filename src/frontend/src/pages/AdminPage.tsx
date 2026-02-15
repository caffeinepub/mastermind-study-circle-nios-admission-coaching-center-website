import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import AdminAccessGate from '../components/Admin/AdminAccessGate';
import { useHomePageContent, useContactContent, useUpdatePage } from '../hooks/useSiteContent';
import { contentDefaults } from '../components/Admin/contentDefaults';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Save, CheckCircle, AlertCircle, Loader2, Settings } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export default function AdminPage() {
  return (
    <AdminAccessGate>
      <AdminContent />
    </AdminAccessGate>
  );
}

function AdminContent() {
  const queryClient = useQueryClient();
  const { clear } = useInternetIdentity();
  const { headline, subheadline } = useHomePageContent();
  const { address, phone, email } = useContactContent();
  const updatePage = useUpdatePage();

  const [homeData, setHomeData] = useState({
    headline: '',
    subheadline: '',
  });

  const [contactData, setContactData] = useState({
    address: '',
    phone: '',
    email: '',
  });

  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize form data when content loads
  useEffect(() => {
    setHomeData({
      headline: headline,
      subheadline: subheadline,
    });
  }, [headline, subheadline]);

  useEffect(() => {
    setContactData({
      address: address,
      phone: phone,
      email: email,
    });
  }, [address, phone, email]);

  const handleSave = async () => {
    setSaveStatus('idle');
    setErrorMessage('');

    try {
      // Save home page content
      await updatePage.mutateAsync({
        pageId: 'home',
        content: {
          title: 'Home',
          header: homeData.headline,
          body: homeData.subheadline,
          footer: '',
        },
      });

      // Save contact page content
      await updatePage.mutateAsync({
        pageId: 'contact',
        content: {
          title: 'Contact',
          header: contactData.address,
          body: contactData.phone,
          footer: contactData.email,
        },
      });

      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Error saving content:', error);
      setSaveStatus('error');
      setErrorMessage(error.message || 'Failed to save changes. Please try again.');
    }
  };

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  const isSaving = updatePage.isPending;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Settings className="h-4 w-4" />
                Admin Panel
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Site Content Management</h1>
              <p className="mt-2 text-muted-foreground">
                Edit your website content and contact information
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </section>

      {/* Content Editor */}
      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Status Messages */}
          {saveStatus === 'success' && (
            <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                Changes saved successfully! Your updates are now live on the website.
              </AlertDescription>
            </Alert>
          )}

          {saveStatus === 'error' && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
          )}

          {/* Home Page Content */}
          <Card>
            <CardHeader>
              <CardTitle>Home Page Hero Section</CardTitle>
              <CardDescription>
                Edit the main headline and subheadline displayed on the homepage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="headline">Hero Headline</Label>
                <Input
                  id="headline"
                  value={homeData.headline}
                  onChange={(e) => setHomeData({ ...homeData, headline: e.target.value })}
                  placeholder={contentDefaults.homeHeroHeadline}
                  disabled={isSaving}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subheadline">Hero Subheadline</Label>
                <Textarea
                  id="subheadline"
                  value={homeData.subheadline}
                  onChange={(e) => setHomeData({ ...homeData, subheadline: e.target.value })}
                  placeholder={contentDefaults.homeHeroSubheadline}
                  rows={4}
                  disabled={isSaving}
                />
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update contact details shown on the Admissions page and footer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={contactData.address}
                  onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                  placeholder={contentDefaults.contactAddress}
                  disabled={isSaving}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={contactData.phone}
                  onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                  placeholder={contentDefaults.contactPhone}
                  disabled={isSaving}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  placeholder={contentDefaults.contactEmail}
                  disabled={isSaving}
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={isSaving}
              size="lg"
              className="min-w-[200px]"
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-5 w-5" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
