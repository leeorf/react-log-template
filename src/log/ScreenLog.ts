import { Log } from '../presentation/interfaces/Log'
import { Analytics } from './interfaces/Analytics'

export class ScreenLog implements Log {
  constructor (private readonly analytics: Analytics) {}

  event (type: Log.Type, data: Log.Data): void {
    this.analytics.save(type, data.name)
  }
}