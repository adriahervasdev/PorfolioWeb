import React from 'react';
import { cn } from '@lib/utils'; 

interface LinkRedirectionProps {
  href: string; // Esta es la URL a la que quieres redirigir
  external?: boolean;
  underline?: boolean;
  textsize?: string;
  paddingBottom?: string;
  lang?: string; // Hacemos 'lang' opcional si ya no se usa para la URL principal
  [key: string]: any; 
}

const LinkRedirection: React.FC<LinkRedirectionProps> = ({ 
  href, // Asegúrate de que href está desestructurado aquí
  external, 
  underline = true, 
  textsize = "text-xl", 
  paddingBottom = "pb-1",
  lang, // Puedes mantenerla si la usas para otras cosas, pero ya no para la redirección principal
  children, 
  ...rest 
}) => {

  const uniqueId = React.useId(); 

  const handleDivClick = () => {
    // ¡CAMBIO AQUÍ! Ahora usa la prop 'href'
    window.location.href = href; 
  };

  const underlineClass = underline ? 'underline' : 'no-underline';

  return (
    <div 
      className="animate-links cursor-pointer" 
      onClick={handleDivClick}
      id={`link-redirection-${uniqueId}`}
    >
      <a 
        target={external ? "_blank" : "_self"} 
        className={cn(`inline-block ${textsize} font-regular ${paddingBottom} InterLinks transition-colors duration-300 ease-in-out ${underlineClass}`)}
        {...rest}
      >
        {children} 
      </a>
    </div>
  );
};

export default LinkRedirection;