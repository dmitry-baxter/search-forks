export const fetchForks = query => {
  return new Promise((resolve) => {
    fetch(`/api/get-forks?${ query }`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then(res => res.json()).then(res => {
      resolve(res)
    })
  })
}
