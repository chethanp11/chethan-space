import type { Metadata } from 'next';
import { ContentIndex } from '@/components/content-index';
import { Section } from '@/components/section';
import { getCollection } from '@/lib/content';

export const metadata: Metadata = { title: 'Projects', description: 'Systems, platforms, and frameworks demonstrating enterprise AI architecture.' };

export default function ProjectsPage() {
  return <Section eyebrow="Projects" title="Evidence layer for systems thinking." description="Filtered catalog of AI platforms, knowledge systems, agentic workflows, analytics products, frameworks, and experimental systems."><ContentIndex items={getCollection('projects')} basePath="/projects" /></Section>;
}
