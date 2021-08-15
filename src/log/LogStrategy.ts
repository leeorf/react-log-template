import { ScreenLog } from './ScreenLog'
import { ActionLog } from './ActionLog'
import { ErrorLog } from './ErrorLog'
import { Log } from '../presentation/interfaces/Log'

export class LogStrategy implements Log {
  constructor (
    private readonly screenLog: ScreenLog,
    private readonly actionLog: ActionLog,
    private readonly errorLog: ErrorLog,
  ) {}

  event (type: Log.Type, data: Log.Data): void {
    switch(type) {
      case 'screen': {
        this.screenLog.event(type, data)
        break
      }
      case 'action': {
        this.actionLog.event(type, data)
        break
      }
      case 'error': {
        this.errorLog.event(type, data)
        break
      }
    }
  }
}