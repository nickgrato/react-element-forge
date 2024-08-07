---
title: Button
---
# Introduction

This document will walk you through the implementation of the Button component.

The Button component is designed to be flexible and reusable, supporting various types, sizes, categories, and icons.

We will cover:

1. The types and categories of buttons.
2. The properties supported by the Button component.
3. The logic for rendering icons within the button.
4. The main Button component logic, including handling links and buttons.

# Button types and categories

<SwmSnippet path="/src/components/Button/Button.tsx" line="1">

---

We define the types and categories of buttons to ensure consistent styling and behavior across the application.

```
import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';
import Icon, { IconT } from '../Icon/Icon';

export type ButtonT = 'button' | 'submit' | 'reset';

/**
 * type is formatted in snake_case so that we can use the mapped
 * value as a SCSS value.
 */
export type ButtonCategoriesT =
  | 'primary_solid'
  | 'primary_outline'
  | 'primary_clear'
  | 'secondary_solid'
  | 'secondary_outline'
  | 'secondary_clear';
```

---

</SwmSnippet>

# Button properties

<SwmSnippet path="/src/components/Button/Button.tsx" line="29">

---

The Button component supports a variety of properties to customize its appearance and behavior. These properties are defined in the <SwmToken path="/src/components/Button/Button.tsx" pos="30:4:4" line-data="export type ButtonPropsT = {">`ButtonPropsT`</SwmToken> type.

```

export type ButtonPropsT = {
  active?: boolean;
  id?: string;
  text?: string;
  label?: string;
  type?: ButtonT;
  category?: ButtonCategoriesT;
  size?: ButtonSizesT;
  disabled?: boolean;
  icon?: IconT;
  customIcon?: React.ReactNode;
  iconPlacedRight?: boolean;
  href?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  LinkComponent?: LinkComponentT;
};
```

---

</SwmSnippet>

# Button icon logic

<SwmSnippet path="/src/components/Button/Button.tsx" line="55">

---

The <SwmToken path="/src/components/Button/Button.tsx" pos="56:2:2" line-data="const ButtonIcon = ({">`ButtonIcon`</SwmToken> component handles the rendering of icons within the button. It supports both predefined icons and custom icons.

```

const ButtonIcon = ({
  icon,
  customIcon,
  hasText,
  position = 'left',
}: ButtonIconT) => {
  if (customIcon) return <>{customIcon}</>;
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/Button/Button.tsx" line="63">

---

If no icon is provided, it returns an empty fragment. Otherwise, it renders the <SwmToken path="/src/components/Button/Button.tsx" pos="64:5:5" line-data="  if (!icon) {">`icon`</SwmToken> component with the appropriate styles.

```

  if (!icon) {
    return <></>;
  }

  return (
    <Icon
      name={icon}
      color="currentColor"
      size={22}
      className={hasText ? styles[position] : ''}
    />
  );
};
```

---

</SwmSnippet>

# Main Button component logic

<SwmSnippet path="/src/components/Button/Button.tsx" line="77">

---

The main <SwmToken path="/src/components/Button/Button.tsx" pos="78:2:2" line-data="const Button = ({">`Button`</SwmToken> component is defined with default properties and handles the rendering of the button content, including text and icons.

```

const Button = ({
  active,
  id,
  text,
  label,
  type = 'button',
  category = 'primary_solid',
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
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/Button/Button.tsx" line="106">

---

The content includes the button text and optionally an icon, which can be placed on the left or right side of the text.

```

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
  );
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/Button/Button.tsx" line="120">

---

The CSS class for the button is configured based on its category, size, and other properties.

```

  /**
   * Configure CSS Class
   */
  const buttonStyle = `
    ${styles['button_' + category]} 
    ${styles[size]} 
    ${!text && styles[size + '_round']} 
    ${className} 
    ${active && styles['button_' + category + '_active']}
  `;
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/Button/Button.tsx" line="131">

---

If the <SwmToken path="/src/components/Button/Button.tsx" pos="132:4:4" line-data="  if (href &amp;&amp; LinkComponent) {">`href`</SwmToken> and <SwmToken path="/src/components/Button/Button.tsx" pos="132:8:8" line-data="  if (href &amp;&amp; LinkComponent) {">`LinkComponent`</SwmToken> properties are provided, the button is rendered as a custom link component, which is useful for frameworks like Next.js.

```

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
    );
  }
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/Button/Button.tsx" line="145">

---

If only the <SwmToken path="/src/components/Button/Button.tsx" pos="146:4:4" line-data="  if (href) {">`href`</SwmToken> property is provided, the button falls back to a standard <SwmToken path="/src/components/Button/Button.tsx" pos="147:13:15" line-data="    // Fall back to a standard &lt;a&gt; tag if LinkComponent is not provided">`<a>`</SwmToken> tag.

```

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
    );
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
  );
};
```

---

</SwmSnippet>

<SwmSnippet path="/src/components/Button/Button.tsx" line="174">

---

Finally, if no <SwmToken path="/src/components/Button/Button.tsx" pos="42:1:1" line-data="  href?: string;">`href`</SwmToken> is provided, the button is rendered as a standard `<button>` element.

```

export default Button;

```

---

</SwmSnippet>

This concludes the walkthrough of the Button component implementation. The design decisions ensure flexibility and reusability while maintaining consistent styling and behavior.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBcmVhY3QtZWxlbWVudC1mb3JnZSUzQSUzQW5pY2tncmF0bw==" repo-name="react-element-forge"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
