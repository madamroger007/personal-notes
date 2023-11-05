import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import CatatanApp from './CatatanApp';


const root = createRoot(document.getElementById('root'));
root.render(
<CatatanApp/>
);