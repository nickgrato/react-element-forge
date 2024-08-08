export type TypographyPropsT = {}
const Typography = ({}: TypographyPropsT) => {
  return (
    <div>
      <section>
        <h1 className="heading-md">Headings</h1>
        <h1 className="heading-xxl">Heading XXL</h1>
        <h2 className="heading-xl">Heading XL</h2>
        <h2 className="heading-lg">Heading LG</h2>
        <h2 className="heading-md">Heading MD</h2>
        <h2 className="heading-sm">Heading SM</h2>
        <h2 className="heading-xs">Heading XS</h2>
        <h2 className="heading-xxs">Heading XXS</h2>
      </section>
      <hr />

      <section>
        <h1 className="heading-md">Body Styles</h1>
        <p className="body-sm">body-sm</p>
        <p className="body-sm-bold">body-sm-bold</p>
        <p className="body-md">body-md</p>
        <p className="body-md-bold">body-md-bold</p>
        <p className="body-lg">body-lg</p>
      </section>
    </div>
  )
}

export default Typography
