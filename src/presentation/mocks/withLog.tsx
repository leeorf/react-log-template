import { Log } from "presentation/interfaces/Log"

type WrappedComponentProps = {
  log: Log
}

export const log: Log = {
  event (type: Log.Type, data: Log.Data) {}
}

jest.mock('../components/hoc/withLog', () => {
  return {
    withLog: (WrappedComponent: ({ log }: WrappedComponentProps) => JSX.Element) => {

      const WithLog = () => {
        return <WrappedComponent log={log} />
      }

      return WithLog
    }
  }
})

export {}