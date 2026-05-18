import type { Metadata } from 'next';
import { ContentIndex } from '@/components/content-index';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Work', description: 'Selected projects, systems, products, and frameworks from Chethan.' };

export default function ProjectsPage() {
  return <Section eyebrow="Work" title="Selected work and project archive." description="A filtered catalog of practical systems: AI platforms, analytics products, knowledge systems, workflow patterns, frameworks, and experiments."><ContentIndex items={getCollection('projects')} basePath="/projects" /></Section>;
}
