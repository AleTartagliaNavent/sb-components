/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitaliza la etiqueta
     */
    allCaps?: boolean;
    /**
     * Cambia el color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Cambia el color de la fuente
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: MyLabelProps) => JSX.Element;
