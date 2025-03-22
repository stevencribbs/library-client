const baseUrl = 'http://localhost:3300'

export const getData = (userId: number): string => {
    return baseUrl + '/data/' + userId
}
