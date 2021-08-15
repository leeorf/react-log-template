import { ErrorAnalytics } from '../../../log/interfaces/ErrorAnalytics'
import { Analytics } from '../../../log/interfaces/Analytics'

export class YourOwnAnalytics implements Analytics, ErrorAnalytics {
  save (type: string, data: any): void {
    // do your implementation here
    // Example: Mongodb to save log
  }

  saveError (error: any): void {
    // do your implementation here
    // Example: Mongodb to save log
  }
}