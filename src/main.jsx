import { CounterApp } from './01-useState/CounterApp';
import { CarritoCompra } from './01-useState/CarritoCompra';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { FormularioSimple } from './useEfect/FormularioSimple';




createRoot(document.getElementById('root')).render(
 
    <>
        <FormularioSimple/>
        <CarritoCompra />
    </>
)
