import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { PageContent } from '../backend';
import { contentDefaults } from '../components/Admin/contentDefaults';

// Legacy values to detect and replace
const LEGACY_HEADER = 'Home Page';
const LEGACY_BODY = 'Where ideas become reality. Explore cutting-edge technology and innovation.';

export function useGetHomePage() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<PageContent>({
    queryKey: ['homePage'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getHomePage();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

export function useGetPage(pageId: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<PageContent | null>({
    queryKey: ['page', pageId],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getPage(pageId);
    },
    enabled: !!actor && !actorFetching && !!pageId,
    retry: false,
  });
}

export function useUpdatePage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ pageId, content }: { pageId: string; content: PageContent }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updatePage(pageId, content);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['page', variables.pageId] });
      queryClient.invalidateQueries({ queryKey: ['homePage'] });
    },
  });
}

export function useHomePageContent() {
  const { data: homePage, isLoading } = useGetHomePage();

  // Normalize legacy values: if the stored content exactly matches the old legacy text,
  // replace it with the new education/vision-focused defaults
  const normalizedHeadline = 
    homePage?.header === LEGACY_HEADER 
      ? contentDefaults.homeHeroHeadline 
      : (homePage?.header || contentDefaults.homeHeroHeadline);

  const normalizedSubheadline = 
    homePage?.body === LEGACY_BODY 
      ? contentDefaults.homeHeroSubheadline 
      : (homePage?.body || contentDefaults.homeHeroSubheadline);

  return {
    headline: normalizedHeadline,
    subheadline: normalizedSubheadline,
    isLoading,
  };
}

export function useContactContent() {
  const { data: contactPage, isLoading } = useGetPage('contact');

  return {
    address: contactPage?.header || contentDefaults.contactAddress,
    phone: contactPage?.body || contentDefaults.contactPhone,
    email: contactPage?.footer || contentDefaults.contactEmail,
    isLoading,
  };
}
