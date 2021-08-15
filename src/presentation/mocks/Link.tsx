type LinkProps = {
  to: string
  children: string
}

jest.mock('react-router-dom', () => {
  return {
    Link: ({ to, children }: LinkProps) => {
      return (
        <a href={to}>{children}</a>
      )
    }
  }
})

export {}