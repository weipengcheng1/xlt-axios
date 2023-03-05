import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get?id=1',
  params: {
  },
}).then(resp => {
  console.log(resp)
})


axios({
  method: 'post',
  url: '/simple/get1?id=1',
  data:{
    a: 1,
    b: 2,
    c: [3,4],
  }
}).then(resp => {
  console.log(resp)
})

