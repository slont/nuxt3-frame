import { InjectionKey } from 'vue'
import { User } from '~/type'

export const UserIK: InjectionKey<User> = Symbol('UserIK')
