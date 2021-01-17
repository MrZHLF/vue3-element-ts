import { ref } from 'vue'

interface User {
  email: string
  password: string
}
export const loginUser = ref<User>({
  email: '',
  password: '',
})

interface Rules {
  email: {
    type: string
    message: string
    required: boolean
    trigger: string
  }[]
  password: (
    | {
        message: string
        required: boolean
        trigger: string
        min?: undefined
        max?: undefined
      }
    | {
        min: number
        max: number
        message: string
        trigger: string
        required?: undefined
      }
  )[]
}

export const rules = ref<Rules>({
  email: [
    { type: 'email', message: '邮箱不正确', required: true, trigger: 'blur' },
  ],
  password: [
    { message: '密码不能为空', required: true, trigger: 'blur' },
    { min: 6, max: 30, message: '密码长度不能少于6大于30', trigger: 'blur' },
  ],
})
