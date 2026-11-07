import type { MapSelection, RegionId } from '@/types/portfolio'

type SelectionListener = (selection: MapSelection) => void

const overviewSelection: MapSelection = {
  mode: 'overview',
  regionId: null,
  cityId: null,
  projectId: null,
}

export class SelectionManager {
  private selection: MapSelection = { ...overviewSelection }
  private readonly listeners = new Set<SelectionListener>()

  get current(): MapSelection {
    return this.selection
  }

  subscribe(listener: SelectionListener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private emit(): void {
    for (const listener of this.listeners) listener(this.selection)
  }

  selectRegion(regionId: RegionId): void {
    this.selection = {
      mode: 'region',
      regionId,
      cityId: null,
      projectId: null,
    }
    this.emit()
  }

  selectCity(regionId: RegionId, cityId: string): void {
    this.selection = {
      mode: 'city',
      regionId,
      cityId,
      projectId: null,
    }
    this.emit()
  }

  selectProject(regionId: RegionId, projectId: string, cityId: string | null = null): void {
    this.selection = {
      mode: 'project',
      regionId,
      cityId,
      projectId,
    }
    this.emit()
  }

  goOverview(): void {
    this.selection = { ...overviewSelection }
    this.emit()
  }
}
