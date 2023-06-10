import './myLabel.css';

export interface MyLabelProps {
  /**
   * This is the message that will be shown in the label
   */
  label: string;
  /**
   * This is the size that the label will be
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Whether label should be capitalized
   */
  allCaps?: boolean
  /**
   * Color of the label
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * What font color to use
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
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }} >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
};
