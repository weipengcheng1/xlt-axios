import axios from '../../src/index'

axios({
  method: 'post',
  url: '/simple/get1?id=1',
  params: {
    a: 1,
    b: 2,
    c: [3,4],
    d:new Date()
  },
  data:{
    a: 1,
    b: 2,
    c: [3,4],
    d:new Date()
  }
}).then(resp => {
  console.log(resp)
})
