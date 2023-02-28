import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get1',
  params: {
    a: 1,
    b: 2
  }
}).then(resp => {
  console.log(resp)
})
