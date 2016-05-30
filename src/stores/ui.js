import { observable } from 'mobx'

export class UI {
  @observable fetchCount = 0
}

export default new UI()

