import { ErrorAnalytics } from '../../../../log/interfaces/ErrorAnalytics'

export class YourErrorAnalyticsAdapter implements ErrorAnalytics {
  saveError (error: any): void {
    // do your implementation here
    // Example: Loggly, Sentry
  }
}