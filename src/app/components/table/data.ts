export const columnNames = [
  'name',
  'types',
  'attack',
  'defense',
  'speed',
  'healing',
  'recovery',
  'health',
  'levelUp'
]

export const heroes = {
  'Hammerer Maccabeus': {
    name: 'Hammerer Maccabeus',
    types: 'Holy/Fire',
    attack: 1,
    defense: 1,
    speed: 1,
    healing: 1,
    recovery: 1,
    health: 5
  },
  'Ethereal Moodmorph': {
    name: 'Ethereal Moodmorph',
    types: 'Water/Fire',
    attack: 1,
    defense: 1,
    speed: 1,
    healing: 1,
    recovery: 1,
    health: 5
  },
  'John Wick': {
    name: 'John Wick',
    types: 'Water/Ice',
    attack: 1,
    defense: 1,
    speed: 1,
    healing: 1,
    recovery: 1,
    health: 12
  },
  'Dumbledore': {
    name: 'Dumbledore',
    types: 'Love',
    attack: 1,
    defense: 1,
    speed: 1,
    healing: 1,
    recovery: 1,
    health: 154
  },
  'Bertha Grandpied': {
    name: 'Bertha Grandpied',
    types: 'Smell/Fart',
    attack: 1,
    defense: 1,
    speed: 1,
    healing: 1,
    recovery: 1,
    health: 3
  },
  'Grinch': {
    name: 'Grinch',
    types: 'Dreams/Tears',
    attack: 1,
    defense: 1,
    speed: 1,
    healing: 1,
    recovery: 1,
    health: 18
  },
};

// types
export interface Heroe {
  [name: string]: {
    name: string
    types: string
    attack: number
    defense: number
    speed: number
    healing: number
    recovery: number
    health: number
  }
}