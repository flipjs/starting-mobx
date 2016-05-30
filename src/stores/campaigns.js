import { observable } from 'mobx'

export class Campaigns {
  @observable isFetching = false
  @observable records = []
  @observable error = ''
}

export default new Campaigns()

