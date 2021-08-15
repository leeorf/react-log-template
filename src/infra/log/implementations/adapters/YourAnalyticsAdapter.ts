import { Analytics } from '../../../../log/interfaces/Analytics'

export class YourAnalyticsAdapter implements Analytics{
  save (type: string, data: any): void {
    // do your implementation here
    // Example: Google Analytics, Firebase
  }
}