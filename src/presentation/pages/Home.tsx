import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withLog } from '../components/hoc/withLog'

export const Home = withLog(({ log }) => {
  useEffect(() => {
    log.event('screen', { name: 'Home' })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickButtonWithError = () => {
    log.event('action', { name: "Home 'I am a button with error' button" })

    try {
      console.log(test)
    } catch (err) {
      const error = err as Error;
      log.event('error', { error: error.message })
    }
  }

  const handleClickButton = () => {
    log.event('action', { name: "Home 'Click Me' button" })
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to='/'>To login</Link>
      <button onClick={handleClickButton} data-testid="button" >Click me</button>
      <button onClick={handleClickButtonWithError} data-testid="button-error" >I am a button with error</button>
    </div>
  )
})