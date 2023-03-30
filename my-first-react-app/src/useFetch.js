import { useState, useEffect } from 'react'


// custom hook to fetch data from the API. Needs to start with the word use.
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsLoading(false)
          setError(null)
        })
        .catch(err => {
          setError(err.message)
          setIsLoading(false)
        })
    }, 1000)
  }, [url])

  return { data, isLoading, error }
}

export default useFetch