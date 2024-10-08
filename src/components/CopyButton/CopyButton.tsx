import { useCallback, useState } from 'react'
import styles from './CopyButton.module.scss'
import Button, { ButtonVariantT, ButtonColorT } from '../Button'

export type CopyButtonPropsT = {
  onClick?: () => void
  successMessage?: string
  value: string | number
  variant?: ButtonVariantT
  color?: ButtonColorT
  className?: string
}

const CopyButton = ({
  onClick,
  successMessage = 'Copied!',
  value,
  variant = 'clear',
  color = 'primary',
  className = '',
}: CopyButtonPropsT) => {
  const [success, setSuccess] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    onClick && onClick()

    navigator.clipboard.writeText(value.toString()).then(() => {
      startSuccessTimer()
    })
  }, [onClick, value])

  const startSuccessTimer = () => {
    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 1500)
  }

  return (
    <>
      {success ? (
        <div className={styles.success}>{successMessage}</div>
      ) : (
        <Button
          label="copy"
          className={className}
          onClick={handleClick}
          icon="copy"
          size="small"
          variant={variant}
          color={color}
        />
      )}
    </>
  )
}

export default CopyButton
