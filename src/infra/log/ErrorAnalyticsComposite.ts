import { ErrorAnalytics } from '../../log/interfaces/ErrorAnalytics'

export class ErrorAnalyticsComposite implements ErrorAnalytics {
  constructor(private readonly errorAnalytics: ErrorAnalytics[])
  {}

  saveError (error: any): void {
    this.errorAnalytics.forEach(erroAnalytic => erroAnalytic.saveError(error))
  }
}