import React from 'react'

interface TitleProps {
  children?: React.ReactNode;
  text?: string;
}

function Title({ children, text }: TitleProps) {
  return (
    <div>
      {text || children}
    </div>
  )
}

export default Title
