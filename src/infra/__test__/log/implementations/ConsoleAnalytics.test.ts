import { ConsoleAnalytics } from '../../../log/implementations/ConsoleAnalytics'

describe('Console log implementation', () => {
  let consoleMock: jest.SpyInstance
  let consoleImplementation: ConsoleAnalytics

  beforeEach(() => {
    consoleMock = jest.spyOn(console, 'table').mockImplementation(jest.fn)
    consoleImplementation = new ConsoleAnalytics()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to log screen events on console', () => {
    consoleImplementation.save('screen', 'Screen rendered' )
    expect(consoleMock).toHaveBeenCalledWith({ 'screen': 'Screen rendered' })
  })

  it('should be able to log action events on console', () => {
    consoleImplementation.save('action', 'Click button' )
    expect(consoleMock).toHaveBeenCalledWith({ 'action': 'Click button' })
  })

  it('should be able to log error events on console', () => {
    consoleImplementation.saveError('Ops! Found an error here' )
    expect(consoleMock).toHaveBeenCalledWith({ 'error': 'Ops! Found an error here' })
  })
})