import './style.css';
//import'./Topics/03-funtions.ts';
import'./Topics/04-Homework-types.ts;
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
HOLA MUNDO`;
console.log ('hola mundo')

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
