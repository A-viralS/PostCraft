'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from './writePage.module.css'
import { useEffect, useState } from 'react'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from 'next/navigation'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { app } from '@/utils/firebase'
import { useSession } from 'next-auth/react'
import { nunito } from '@/utils/fonts'
import CategoryOptions from '@/components/CategoryOptions/CategoryOptions'

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const EditPage = ({ post }) => {
  const router = useRouter()
  const { status } = useSession()
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState(post.img || '')
  const [value, setValue] = useState(post.desc || '')
  const [title, setTitle] = useState(post.title || '')
  const [catSlug, setCatSlug] = useState(post.catSlug || '')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage = getStorage(app)

      const upload = () => {
        const name = new Date().getTime() + file.name
        const storageRef = ref(storage, name)

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
          'state_changed',
          snapshot => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused')
                break
              case 'running':
                console.log('Upload is running')
                break
            }
          },
          error => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
              setMedia(downloadURL)
            })
          }
        )
      }
      file && upload()
    }
  }, [file])

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }

  const handleSubmit = async () => {
    // const res = await fetch(`http://localhost:3000/api/posts/${post.slug}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title,
    //     desc: value,
    //     img: media,
    //     catSlug: catSlug || 'style'
    //   })
    // })
    const res = await fetch(`https://post-craft.vercel.app/api/${post.slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        catSlug: catSlug || 'style'
      })
    })

    if (res.status === 200) {
      const data = await res.json()
      console.log('data slug in edit page ', data.slug)
      router.replace(`/posts/${data.slug}`)
    } else {
      console.error('Failed to update post:', await res.json())
    }
  }

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Title'
        className={styles.input}
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ fontFamily: 'fantasy' }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'between',
          margin: '0 0 10px 0',
          fontFamily: 'nunito',
          fontWeight: 'bold',
          gap: '10px'
        }}
      >
        <p> 📚 Choose your blog&apos;s category! </p>
        <CategoryOptions setCatSlug={setCatSlug} />
      </div>
      <div className={styles.editor}>
        <p style={{ fontFamily: 'nunito', fontWeight: 'bold' }}>
          {' '}
          📸 Choose an image for your blog!
        </p>
        <button className={styles.button} style={{ margin: '0 0 0 10px' }}>
          <label htmlFor='image'>
            <Image
              src='/image.png'
              alt=''
              width={32}
              height={32}
              style={{ padding: '3px' }}
            />
          </label>
          <input
            type='file'
            id='image'
            onChange={e => setFile(e.target.files[0])}
            style={{ display: 'none' }}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6'
          >
            <path
              fillRule='evenodd'
              d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <label htmlFor='image'>
                <Image
                  src='/image.png'
                  alt=''
                  width={32}
                  height={32}
                  style={{ padding: '3px' }}
                />
              </label>
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        className={styles.textArea}
        style={{ marginTop: '60px', fontFamily: 'nunito' }}
        theme='bubble'
        value={value}
        onChange={setValue}
        placeholder='Tell your story... tip: select the text to format it!✨ ✨, paste any picture you want as well'
      />
      <div className={styles.box} onClick={handleSubmit}>
        Publish
      </div>
    </div>
  )
}

export default EditPage
