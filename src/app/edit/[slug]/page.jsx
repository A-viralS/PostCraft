import EditPage from '../../../components/editPageComponent'

const getData = async slug => {
  try {
    // const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    //   cache: 'no-store'
    // })
    const res = await fetch(`https://post-craft.vercel.app/api/posts/${slug}`, {
      cache: 'no-store'
    })
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`)
      return null // Handle the error as needed
    }

    const data = await res.json() // Directly parse JSON
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    return null // Handle the error as needed
  }
}

const Page = async ({ params }) => {
  const { slug } = params
  const post = await getData(slug)
  return <EditPage post={post} />
}

export default Page
