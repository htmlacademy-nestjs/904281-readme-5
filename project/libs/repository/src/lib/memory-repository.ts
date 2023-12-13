import {Repository} from "./repository.interface";
import {Entity} from "@project/types";

export abstract class MemoryRepository<T extends Entity> implements Repository<T> {
  protected entities: Map<T['id'], T> = new Map()

  public async findById(id: T['id']): Promise<T | null> {
    return this.entities.get(id) || null
  }

  public async save(entity: T): Promise<T> {
    const id = entity.id

    this.entities.set(id, entity)

    return entity
  }

  public async update(entity: T): Promise<T> {
    const id = entity.id

    this.entities.set(id, entity)

    return entity
  }

  public async deleteById(id: T['id']): Promise<void> {
    this.entities.delete(id)
  }
}
