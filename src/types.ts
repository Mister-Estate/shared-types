// Shared types between frontend and backend

export interface RegisterBody {
  email: string
  password: string
  prenom: string
  nom: string
  profil: 'pro' | 'part'
}

export interface LoginBody {
  email: string
  password: string
}

export interface AuthUser {
  id: string
  email: string
  prenom: string
  nom: string
  profil: 'pro' | 'part'
}

export interface BienFavori {
  id: string
  numero: string
  section: string
  prefixe: string
  commune: string
  codeInsee: string
  codePostal: string
  surface: number | null
  adresse: string
  lat: number
  lng: number
  savedAt: string
  dvfMedian: number | null
  dvfEvolution: string | null
  score: number | null
}

export type TypeBien = 'appartement' | 'maison' | 'studio' | 'local_commercial' | 'parking' | 'terrain'
export type StatutBien = 'loue' | 'libre' | 'en_vente' | 'travaux'

export interface BienParc {
  id: string
  nom: string
  adresse: string
  type: TypeBien
  surface: number
  valeur: number
  loyerMensuel: number
  charges: number
  statut: StatutBien
  anneeAcquisition: number
  note: string
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface AiChatBody {
  messages: ChatMessage[]
  dvfContext?: string
}

export interface AiConversation {
  id: string
  userId: string
  messages: ChatMessage[]
  commune: string | null
  codeInsee: string | null
  createdAt: string
  updatedAt: string
}
