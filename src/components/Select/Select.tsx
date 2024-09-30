import Icon from '../Icon'
import {
  FocusEventHandler,
  ChangeEventHandler,
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  FocusEvent,
} from 'react'
import styles from './Select.module.scss'

export type SelectInterfaceT = {
  focusSelect: () => void
  isDirty: () => void
}

export type OptionT = {
  value: string
  label: string
}

type SelectPropsT = {
  label: string
  options: OptionT[]
  name: string
  info?: string
  className?: string
  onBlur?: (e: FocusEvent<HTMLSelectElement, Element>) => void
  onFocus?: () => void
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  validator?: (value: string | number | readonly string[] | undefined) => void
  required?: boolean
  showRequired?: boolean
  showLabel?: boolean
  isError?: boolean
  customErrorMessage?: string
  value: string | number | readonly string[] | undefined
  id?: string
}

const Select = forwardRef(
  (
    {
      label,
      name,
      options,
      info = '',
      className = '',
      onChange,
      onBlur,
      onFocus,
      validator = () => true,
      required = false,
      showRequired = true,
      showLabel = true,
      isError,
      customErrorMessage,
      value,
      id,
    }: SelectPropsT,
    ref,
  ) => {
    const [isValid, setIsValid] = useState<boolean>(false)
    const [isDirty, setIsDirty] = useState<boolean>(false)
    const [showError, setShowError] = useState<boolean>(false)
    const [showInfo, setShowInfo] = useState<boolean>(false)
    const [initialValue] = useState(value) // used to check if dirty
    const [currentErrorMessage, setCurrentErrorMessage] = useState<string>(
      customErrorMessage ? customErrorMessage : '',
    )
    const selectRef = useRef<HTMLSelectElement>(null)

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, () => {
      return {
        focusSelect: () => selectRef.current?.focus(),
        isDirty: () => isDirty,
      }
    })

    /**
     * Error UI logic
     */
    useEffect(() => {
      setShowError(isError || (isDirty && !isValid))
    }, [isDirty, isValid, isError])

    useEffect(() => {
      setShowInfo(Boolean(info.length) && !showError)
    }, [info, showError])

    /**
     * Handle Select Change
     * @param event
     */
    const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (
      event: ChangeEvent<HTMLSelectElement>,
    ): ChangeEvent<HTMLSelectElement> => {
      const newValue = event.target.value
      typeof onChange === 'function' && onChange(event)

      // If initial value was empty any change makes form dirty
      const isDirty = initialValue === '' ? true : initialValue !== newValue
      setIsDirty(isDirty)
      return event
    }

    /**
     * Handle Blur
     * @param event
     */
    const handleOnBlur: FocusEventHandler<HTMLSelectElement> = (event) => {
      typeof onBlur === 'function' && onBlur(event)
    }

    /**
     * Handle Focus
     */
    const handleOnFocus = () => {
      typeof onFocus === 'function' && onFocus()
    }

    /**
     * Validate Select
     */
    useEffect(() => {
      const select = selectRef.current
      if (!select) return

      const valid = select.validity.valid
      const validationMessage = select.validationMessage
      const validation = valid && validator(value)

      // Prop error message takes precedence
      if (!validation) {
        const message = customErrorMessage
          ? customErrorMessage
          : validationMessage
        message ? setCurrentErrorMessage(message) : null
      }
      setIsValid(validation ? true : false)
    }, [value, customErrorMessage, validator])

    return (
      <div
        className={`${styles.select_wrapper}  ${
          showError ? styles.select_error : null
        } ${className}`}
      >
        {showLabel && (
          <label htmlFor={id}>
            {label}
            <span> {required && showRequired ? '*' : ''}</span>
          </label>
        )}

        <div className={styles.select_container}>
          <select
            ref={selectRef}
            id={id}
            name={name}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            value={value}
            className={styles.select}
          >
            {options.map(({ value: optionValue, label }, i) => {
              return (
                <option key={i} value={optionValue}>
                  {label}
                </option>
              )
            })}
          </select>
          <Icon className={styles.arrow} name="chevron-down" />
        </div>

        {/* Error Message */}
        {showError ? (
          <span className={styles.error_message}>{currentErrorMessage}</span>
        ) : (
          ''
        )}

        {/* Additional Select Information  */}
        {showInfo ? <span className={styles.info}>{info}</span> : ''}
      </div>
    )
  },
)

Select.displayName = 'Select'
export default Select
