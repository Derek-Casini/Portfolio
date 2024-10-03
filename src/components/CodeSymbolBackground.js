import React, { useEffect, useRef } from 'react';

const CodeSymbolBackground = () => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        const symbols = ['{', '}', '(', ')', '<', '>', ';', ':', '=>', '&&', '||', '/*', '*/', '==', '!=', '===', '!=='];
        const container = containerRef.current;

        const generateRandomSymbol = () => {
            const span = document.createElement('span');
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            span.textContent = randomSymbol;
            span.className = 'symbol-character';
            span.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`; 
            span.style.position = 'absolute';
            span.style.left = `${Math.random() * 100}vw`;
            span.style.top = `${Math.random() * 100}vh`;
            container.appendChild(span);
            setTimeout(() => {
                container.removeChild(span);
            }, 3000);
        };

        const interval = setInterval(generateRandomSymbol, 50);

        return () => clearInterval(interval);
    }, []);

    return <div className="code-symbol-background" ref={containerRef}></div>;
};

export default CodeSymbolBackground;