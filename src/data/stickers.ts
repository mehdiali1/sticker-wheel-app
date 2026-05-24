import type { Sticker } from '../types';

export const rarityConfig = {
  common: { label: 'Common', chance: 50, color: '#9ca3af', glow: '#d1d5db', gradient: ['#e5e7eb', '#9ca3af'] },
  uncommon: { label: 'Uncommon', chance: 25, color: '#22c55e', glow: '#86efac', gradient: ['#bbf7d0', '#16a34a'] },
  rare: { label: 'Rare', chance: 15, color: '#3b82f6', glow: '#93c5fd', gradient: ['#bfdbfe', '#1d4ed8'] },
  epic: { label: 'Epic', chance: 8, color: '#a855f7', glow: '#d8b4fe', gradient: ['#e9d5ff', '#7e22ce'] },
  legendary: { label: 'Legendary', chance: 2, color: '#f59e0b', glow: '#fde68a', gradient: ['#fef3c7', '#b45309'] }
} as const;

export const stickers: Sticker[] = [
  { id: 'tabby-cat', name: 'Tabby Cat', rarity: 'common', svgComponent: 'TabbyCat', description: 'A sleepy tabby cat curled up tight.' },
  { id: 'scruffy-dog', name: 'Scruffy Dog', rarity: 'common', svgComponent: 'ScruffyDog', description: 'A loyal scruffy dog with big hopeful eyes.' },
  { id: 'cheeseburger', name: 'Cheeseburger', rarity: 'common', svgComponent: 'Cheeseburger', description: 'A juicy dripping cheeseburger.' },
  { id: 'storm-cloud', name: 'Storm Cloud', rarity: 'common', svgComponent: 'StormCloud', description: 'A moody cloud crackling with lightning.' },
  { id: 'oak-leaf', name: 'Oak Leaf', rarity: 'common', svgComponent: 'OakLeaf', description: 'A detailed autumn oak leaf.' },
  { id: 'tin-robot', name: 'Tin Robot', rarity: 'uncommon', svgComponent: 'TinRobot', description: 'A retro tin wind-up robot.' },
  { id: 'mini-rocket', name: 'Mini Rocket', rarity: 'uncommon', svgComponent: 'MiniRocket', description: 'A hand-painted retro rocket ship.' },
  { id: 'palm-tree', name: 'Palm Tree', rarity: 'uncommon', svgComponent: 'PalmTree', description: 'A tropical palm swaying in the breeze.' },
  { id: 'red-panda', name: 'Red Panda', rarity: 'uncommon', svgComponent: 'RedPanda', description: 'An adorable red panda eating bamboo.' },
  { id: 'skateboard', name: 'Skateboard', rarity: 'uncommon', svgComponent: 'Skateboard', description: 'A worn-in skateboard with grip tape.' },
  { id: 'fire-dragon', name: 'Fire Dragon', rarity: 'rare', svgComponent: 'FireDragon', description: 'A fierce dragon breathing roaring flames.' },
  { id: 'phoenix', name: 'Phoenix', rarity: 'rare', svgComponent: 'Phoenix', description: 'A blazing phoenix rising from ashes.' },
  { id: 'galaxy-orb', name: 'Galaxy Orb', rarity: 'rare', svgComponent: 'GalaxyOrb', description: 'A swirling galaxy trapped in a glass orb.' },
  { id: 'white-tiger', name: 'White Tiger', rarity: 'rare', svgComponent: 'WhiteTiger', description: 'A powerful white tiger mid-roar.' },
  { id: 'great-shark', name: 'Great Shark', rarity: 'rare', svgComponent: 'GreatShark', description: 'A great white shark breaching the surface.' },
  { id: 'cyber-ninja', name: 'Cyber Ninja', rarity: 'epic', svgComponent: 'CyberNinja', description: 'A neon-lit ninja from the future.' },
  { id: 'golden-wolf', name: 'Golden Wolf', rarity: 'epic', svgComponent: 'GoldenWolf', description: 'A wolf with a coat of liquid gold.' },
  { id: 'crystal-sword', name: 'Crystal Sword', rarity: 'epic', svgComponent: 'CrystalSword', description: 'A shimmering sword forged from pure crystal.' },
  { id: 'storm-eagle', name: 'Storm Eagle', rarity: 'epic', svgComponent: 'StormEagle', description: 'An eagle commanding thunderstorms.' },
  { id: 'celestial-dragon', name: 'Celestial Dragon', rarity: 'legendary', svgComponent: 'CelestialDragon', description: 'A dragon woven from the fabric of the cosmos.' },
  { id: 'ancient-titan', name: 'Ancient Titan', rarity: 'legendary', svgComponent: 'AncientTitan', description: 'A titan older than time itself.' },
  { id: 'cosmic-crown', name: 'Cosmic Crown', rarity: 'legendary', svgComponent: 'CosmicCrown', description: 'A crown radiating the power of stars.' }
];
