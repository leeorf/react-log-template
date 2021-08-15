import '../../mocks/Link'
import { log } from '../../mocks/withLog'
import { Home } from '../../pages/Home'
import { fireEvent, render } from '@testing-library/react'

describe('Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to log when page is rendered', () => {
    const mockedLog = jest.spyOn(log, 'event')

    render(<Home />)
    expect(mockedLog).toHaveBeenCalledWith('screen', { name: 'Home' })
  })

  it('should be able to log button events', () => {
    console.log = jest.fn()
    const mockedLog = jest.spyOn(log, 'event')

    const { getByTestId } = render(<Home />)
    const button = getByTestId('button')
    const buttonError = getByTestId('button-error')

    fireEvent.click(button)
    expect(mockedLog).toHaveBeenCalledWith('action', { name: "Home 'Click Me' button" })

    fireEvent.click(buttonError)
    expect(mockedLog).toHaveBeenCalledWith('action', { name: "Home 'I am a button with error' button" })
  })
})