
const log = console.log.bind(console)


 function toObj(o) {
    if (typeof o === 'object') {
      return o
    } else if (typeof o === 'number') {
      return {
        result: o,
        formula: `${o}`
      }
    } else {
      log(o)
      throw new Error('toObj输入参数错误:input = ' + JSON.stringify(o))
    }
  }


  function iterTwo(left, right,isFinal=false) {
    const { result: l, formula: lf } = toObj(left)
    const { result: r, formula: rf } = toObj(right)
    
    let results = [
      { result: l + r, formula: `(${lf} + ${rf})` },
      { result: l - r, formula: `(${lf} - ${rf})` },
      { result: r - l, formula: `(${rf} - ${lf})` },
      { result: l * r, formula: `${lf} * ${rf}` },
    ]
    

    // 分母不能为零
    if (r !== 0) {
      results.push({ result: l / r, formula: `${lf} / ${rf}` })
    }
    if (l !== 0) {
      results.push({ result: r / l, formula: `(${rf} / ${lf})` })
    }
    if(isFinal){
      return results.filter(o=>o.result ===24)
    }
    return results
  }

  
  function getGroups(){}

function find(arr,n=4,target = 24){
  if(n===2){
    return iterTwo(...arr,true)
  }

  let groups = getGroups(arr)

  for(let group of groups){
    let [a,b,...rest] = group
    // let firstTwo = [group[0],group[1]]
    let combinations =  iterTwo(a,b,false)
    for(let combine of combinations){
      find([combine,...rest],n-1)
    }
  }
  
}

let input = [3,4,5,6]
find(input)