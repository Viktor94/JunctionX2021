import React from 'react'

interface TextQuestionProps {
  label: string
}

export const TextQuestion: React.FC<TextQuestionProps> = ({ label }) => {
  return <div>{label}</div>
}
