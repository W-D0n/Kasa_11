import { useEffect, useState } from 'react';

const UseFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching :", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

export default UseFetch