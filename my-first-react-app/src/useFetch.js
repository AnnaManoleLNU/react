import { useState, useEffect } from 'react'


// custom hook to fetch data from the API. Needs to start with the word use.
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
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
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsLoading(false)
            setError(err.message)
          }
        })
    }, 1000)
    /* return clean up function */
    return () => abortCont.abort()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch