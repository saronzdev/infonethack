export async function submitPost(formElement, apiUrl) {
  const data = new FormData(formElement)
  const bodyInput = data.get('md').trim()
  const titleInput = data.get('title').trim()
  const dateInput = new Date(data.get('date'))
  const authorInput = data.get('author').trim()
  const tagsInput = data
    .get('tags')
    .trim()
    .split(',')
    .map((tag) => tag.trim())

  if (!titleInput || !dateInput || !tagsInput || !bodyInput) {
    throw new Error('Por favor, completa todos los campos.')
  }

  if (isNaN(new Date(dateInput).getTime())) {
    throw new Error('Por favor, ingresa una fecha válida.')
  }

  const body = JSON.stringify({
    title: titleInput,
    date: dateInput.toISOString(),
    tags: tagsInput,
    author: authorInput || 'Unknown',
    body: bodyInput
  })

  const response = await fetch(`${apiUrl}/api/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`)
  }

  return response.json()
}