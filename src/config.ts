
import { Story } from './types/common/types'

export const currentLocation = (): string => {
  const currentLocation = new URL(location.href);
  currentLocation.searchParams.delete('accessToken')
  return currentLocation.href
}

export const Config = {
  baseUrlPath : process.env.REACT_APP_URL_PATH || '',
  segmentCategory : process.env.ANALYTICS_CATEGORY || "Watson Discovery Expert Assist Demo",
  configCookieName :  process.env.CONFIG_COOKIE_NAME || "dte-watson-discovery-expert-assist"
} 

export const stories: Story[] = [
  {
    name: 'Engineering',
    description: 'Technical documents describing material science',
    doc_types: ['PDFs, PPTs, PNGs'],
    icon: 'Industry24',
    adjective: 'engineering',
    isEnabled: true
  },
  {
    name: 'Automotive',
    description: 'Product warranties, user manuals, and tutorials',
    doc_types: ['PDFs, DOCs'],
    icon: 'Car24',
    adjective: 'retail',
    isEnabled: true
  },
  {
    name: 'Custom',
    description: 'User specific custom collection',
    doc_types: ['PDFs, DOCs'],
    icon: 'Categories24',
    adjective: 'custom',
    isEnabled: true
  }
]
