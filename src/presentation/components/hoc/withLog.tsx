import { ScreenLog } from '../../../log/ScreenLog'
import { ErrorLog } from '../../../log//ErrorLog'
import { ActionLog } from '../../../log//ActionLog'
import { LogStrategy } from '../../../log//LogStrategy'
import { ErrorAnalyticsComposite} from '../../../infra/log/ErrorAnalyticsComposite'
import { AnalyticsComposite} from '../../../infra/log/AnalyticsComposite'
import { Log } from '../../../presentation/interfaces/Log'
import { ConsoleAnalytics } from 'infra/log/implementations/ConsoleAnalytics'

type WrappedComponentProps = {
  log: Log
}

export const withLog = (WrappedComponent: ((WrappedComponent: WrappedComponentProps) => JSX.Element)): (() => JSX.Element) => {
  const errorAnalyticsComposite = new ErrorAnalyticsComposite([new ConsoleAnalytics()]);
  const analyticsComposite = new AnalyticsComposite([new ConsoleAnalytics()])
  const errorLog = new ErrorLog(errorAnalyticsComposite)
  const actionLog = new ActionLog(analyticsComposite)
  const screenLog = new ScreenLog(analyticsComposite)

  const logStrategy = new LogStrategy(screenLog, actionLog, errorLog)
  
  const WithLog = () => {
    return (
      <WrappedComponent log={logStrategy} />
    )
  }

  return WithLog;
}