export type User = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    phone: string
    firstName: string
    lastName: string
    password: string
    householdId: number | null
    refreshToken: string | null
  }