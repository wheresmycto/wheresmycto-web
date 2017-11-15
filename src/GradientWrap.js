import { cloneElement } from 'react'
import { map } from 'lodash'

const GradientWrap = ({ children, colors = [], deg = 90, percents }) => {
  const division = 100 / (colors.length - 1)

  const percent = index => (percents ? percents[index] : index * division)

  const colorsString = [
    `${deg}deg`,
    ...map(colors, (color, index) => `${color} ${percent(index)}%`),
  ]

  const styles = {
    ...children.props.style,
    backgroundImage: `linear-gradient(${colorsString.join(', ')})`,
  }

  return cloneElement(children, { ...children.props, style: styles })
}

export default GradientWrap
