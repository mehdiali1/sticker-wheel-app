export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface Sticker {
  id: string;
  name: string;
  rarity: Rarity;
  svgComponent: string;
  description: string;
}

export interface OwnedSticker {
  stickerId: string;
  count: number;
  firstObtained: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  spins: number;
  lastDailyClaim: string | null;
  collection: OwnedSticker[];
  totalSpins: number;
}
