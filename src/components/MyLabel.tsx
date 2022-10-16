import './mylabel.css'

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
  fontColor?: string
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor
}: MyLabelProps) => {
  return (
    <span
      style={{ color: fontColor }}
      className={`label ${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
