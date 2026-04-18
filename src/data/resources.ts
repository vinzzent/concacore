import type { Locale } from '../i18n/translations';

export type ResourceFormat = 'pdf' | 'video';
export type ResourceType = 'internalResource' | 'externalResource';

export interface LocalizedResource {
  title: string;
  description: string;
  source: string;
  published: Date;
}

export interface ResourceData {
  id: string;
  type: ResourceType;
  format: ResourceFormat;
  translations: Record<Locale, LocalizedResource>;
}

const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/*
// O dicionário unificado
export const resources: Record<string, Omit<ResourceData, 'id'>> = {
  "product-guide": {
    type: "internalResource",
    format: "pdf",
    translations: {
      "en-us": {
        title: "Product Guide",
        description: "Full guide to our product ecosystem.",
        source: `${base}assets/product-guide.pdf`,
        published: new Date("2026-03-28")
      },
      "pt-br": {
        title: "Guia do Produto",
        description: "Guia completo do nosso ecossistema de produtos.",
        source: `${base}assets/product-guide.pdf`,
        published: new Date("2026-04-05")
      }
    }
  },
  "official-tutorial": {
    type: "externalResource",
    format: "video",
    translations: {
      "en-us": {
        title: "Official Video Tutorial",
        description: "Step-by-step external tutorial covering system setup.",
        source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        published: new Date("2026-04-02")
      },
      "pt-br": {
        title: "Tutorial em Vídeo Oficial",
        description: "Tutorial externo passo a passo abordando a configuração do sistema.",
        source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        published: new Date("2026-04-02")
      }
    }
  }
};
*/

export const resources: Record<string, Omit<ResourceData, 'id'>> = {};

// Utilitário para extrair os recursos como um array facilmente iterável
export function getResourcesAsArray(): ResourceData[] {
  return Object.entries(resources).map(([id, data]) => ({
    id,
    ...data
  }));
}