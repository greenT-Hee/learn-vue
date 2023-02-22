import { useState } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { Animals, PickAnimal } from './atom';


function App() {

  return (
    <RecoilRoot>
      <PickAnimal />
      <Animals />
    </RecoilRoot>
  );
}

export default App;