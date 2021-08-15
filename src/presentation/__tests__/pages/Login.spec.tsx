import '../../mocks/Link'
import { log } from '../../mocks/withLog'
import { Login } from '../../pages/Login'
import { render } from '@testing-library/react'

describe('Login page', () => {
  it('should be able to log when page is rendered', () => {
    const mockedLog = jest.spyOn(log, 'event')

    render(<Login />)
    expect(mockedLog).toHaveBeenCalledWith('screen', { name: 'Login' })
  })
})