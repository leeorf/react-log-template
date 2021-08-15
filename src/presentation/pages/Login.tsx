import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withLog } from '../components/hoc/withLog'

export const Login = withLog(({ log }) => {
  useEffect(() => {
    log.event('screen', { name: 'Login' })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Login</h1>
      <Link to='/home'>To home</Link>
    </div>
  )
})