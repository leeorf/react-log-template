import { Analytics } from '../../log/interfaces/Analytics'

export class AnalyticsComposite implements Analytics {
  constructor(private readonly analytics: Analytics[])
  {}

  save (type: string, data: any): void {
    this.analytics.forEach(analytic => analytic.save(type, data))
  }
}