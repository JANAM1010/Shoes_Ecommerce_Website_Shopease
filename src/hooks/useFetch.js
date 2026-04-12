import { useState, useEffect } from 'react'

function useFetch(fetchFunction) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const result = await fetchFunction()
        setData(result)
      } catch (err) {
        setError("Something went wrong. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])
  return { data, loading, error }
}

export default useFetch