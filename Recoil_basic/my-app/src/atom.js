import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { v1 } from 'uuid'

const ANIMALS = {
  CAT: "cat",
  DOG: "dog"
}

const ALL = 'all';

const animalsState = atom({
  key: `animalsState${v1()}`,
  default: [
    {
      id: 1,
      name: "Rexyy",
      type: ANIMALS.DOG
    },
    {
      id: 2,
      name: "Tomm",
      type: ANIMALS.CAT
    },
    {
      id: 3,
      name: "Oscar",
      type: ANIMALS.CAT
    }
  ]
})

const animalFilterState = atom({
  key: `animalFilterState${v1()}`,
  default: ALL
})

const filteredAnimalsState = selector({
  key: `animalListState${v1()}`,
  get: ({ get }) => {
    const filter = get(animalFilterState);
    const animals = get(animalsState);
    if (filter === ALL) return animals;
    return animals.filter(animal => animal.type === filter);
  }
})

const icon = type => {
  if (type === ANIMALS.DOG) return '🐶';
  if (type === ANIMALS.CAT) return '😺';
}

export const Animals = () => {
  const animals = useRecoilValue(filteredAnimalsState);

  return (
    <div>
      <h1>Animals:</h1>
      {animals.map((animal) => (
        <div key={animal.id}>
          {animal.name}, {animal.type} {icon(animal.type)}
        </div>
      ))}
    </div>
  )

}

export const PickAnimal = () => {
  const setAnimalFilter = useSetRecoilState(animalFilterState);
  return (
    <div className="buttons">
      <button onClick={() => setAnimalFilter(ALL)}>ALL</button>
      <button onClick={() => setAnimalFilter(ANIMALS.DOG)}>DOG</button>
      <button onClick={() => setAnimalFilter(ANIMALS.CAT)}>CAT</button>
    </div>
  )
}