import { useState, useEffect } from 'react'

export const useData = (data) => {
  const [values, setValues] = useState([])

  useEffect(() => {
    setValues(data)
  }, [data])

  return [values, setValues]
}