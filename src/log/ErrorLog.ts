import { Log } from '../presentation/interfaces/Log'
import { ErrorAnalytics } from './interfaces/ErrorAnalytics'

export class ErrorLog implements Log {
  constructor (private readonly errorAnalytics: ErrorAnalytics) {}

  event (type: Log.Type, data: Log.Data): void {
    this.errorAnalytics.saveError(data.error)
  }
}