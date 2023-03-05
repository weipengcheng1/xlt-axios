import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get?id=1',
  params: {}
}).then(resp => {
  console.log(resp)
})


axios({
  method: 'post',
  url: '/simple/get1?id=1',
  data: {
    a: 1,
    b: 2,
    c: [3, 4]
  },
  headers: {}
}).then(resp => {
  console.log(resp)
})


axios({
  method: 'post',
  url: '/simple/get2?id=1',
  timeout: 2000,
  data: {
    a: 1,
    b: 2,
    c: [3, 4]
  },
  headers: {}
}).then(resp => {
  console.log(resp)
}).catch(err => {
  console.log(err)
})
