import { ErrorAnalytics } from '../../../log/interfaces/ErrorAnalytics'
import { Analytics } from '../../../log/interfaces/Analytics'

export class ConsoleAnalytics implements Analytics, ErrorAnalytics {
  save (type: string, data: any): void {
    console.table({ [type]: data })
  }

  saveError (error: any): void {
    console.table({ error })
  }
}