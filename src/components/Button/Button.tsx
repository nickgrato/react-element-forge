import { MouseEventHandler } from 'react'
import styles from './Button.module.scss'
import Icon, { IconT } from '../Icon/Icon'

export type ButtonT = 'button' | 'submit' | 'reset'
export type ButtonVariantT = 'solid' | 'outline' | 'clear'
export type ButtonColorT = 'primary' | 'secondary' | 'delete' | 'pos'
export type ButtonSizesT = 'small' | 'medium' | 'large'

export type LinkComponentT = React.ComponentType<{
  href: string
  children: React.ReactNode
  className?: string
  id?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  target?: string
}>

export type ButtonPropsT = {
  variant?: ButtonVariantT
  active?: boolean
  id?: string
  text?: string
  label?: string
  type?: ButtonT
  color?: ButtonColorT
  size?: ButtonSizesT
  disabled?: boolean
  icon?: IconT
  customIcon?: React.ReactNode
  iconPlacedRight?: boolean
  href?: string
  target?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  className?: string
  LinkComponent?: LinkComponentT
}

type ButtonIconT = {
  icon?: IconT
  customIcon?: React.ReactNode
  hasText: boolean
  position: 'left' | 'right'
}

const ButtonIcon = ({
  icon,
  customIcon,
  hasText,
  position = 'left',
}: ButtonIconT) => {
  if (customIcon) return <>{customIcon}</>

  if (!icon) {
    return <></>
  }

  return (
    <Icon
      name={icon}
      color="currentColor"
      size={22}
      className={hasText ? styles[position] : ''}
    />
  )
}

const Button = ({
  variant = 'solid',
  color = 'primary',
  active,
  id,
  text,
  label,
  type = 'button',
  size = 'medium',
  disabled,
  icon,
  customIcon,
  onClick,
  iconPlacedRight = false,
  href,
  target = '_self',
  className = '',
  LinkComponent,
}: ButtonPropsT) => {
  const content = (
    <>
      {!iconPlacedRight && (
        <ButtonIcon
          customIcon={customIcon}
          icon={icon}
          hasText={Boolean(text?.length)}
          position="left"
        />
      )}

      {/* Button Text  */}
      {text}

      {iconPlacedRight && (
        <ButtonIcon
          customIcon={customIcon}
          icon={icon}
          hasText={Boolean(text?.length)}
          position="right"
        />
      )}
    </>
  )

  /**
   * Configure CSS Class
   */
  const buttonStyle = `
    ${styles['button_' + color + '_' + variant]} 
    ${styles[size]} 
    ${!text && styles[size + '_round']} 
    ${className} 
    ${active && styles['button_' + color + '_' + variant + '_active']}
  `

  if (href && LinkComponent) {
    // To support NextJs Link
    return (
      <LinkComponent
        className={buttonStyle}
        href={href}
        onClick={onClick}
        target={target}
      >
        {content}
      </LinkComponent>
    )
  }

  if (href) {
    // Fall back to a standard <a> tag if LinkComponent is not provided
    return (
      <a
        className={buttonStyle}
        id={id}
        target={target}
        href={href}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }
  // Button logic remains unchanged
  return (
    <button
      className={buttonStyle}
      id={id}
      aria-label={label ? label : text}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default Button
