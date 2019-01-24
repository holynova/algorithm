const log = console.log.bind(console);
// 金矿分工问题
// https://mp.weixin.qq.com/s/dHwnVfBt7VrJG1O9lAAK-w

const findMaxGold = (mineGoldList = [], mineWorkerNeedList = [], workerTotal = 0) => {
  // mineGoldList = []
  // mineWorkerNeedList = []

  const find = (mine = 0, worker = 0) => {
    if (mine === 0) {
      return 0
    } else if (mine === 1) {
      if (worker < mineWorkerNeedList[0]) {
        return 0
      } else {
        return mineGoldList[0]
      }
    } else {
      let planA = find(mine - 1, worker)
      let planB = find(mine - 1, worker - mineWorkerNeedList[mine - 1]) + mineGoldList[mine - 1]
      return Math.max(planA, planB)
    }
  }

  const findWithDetail = (mine = 0, worker = 0, people = []) => {
    log(`mine = ${mine}, worker = ${worker}`)

    if (mine === 0 || worker <= 0) {
      // log(`mine===0`, people)
      return {
        gold: 0,
        people,
      }
    } else if (mine === 1) {
      log(`   mine===1`, { worker, need: mineWorkerNeedList[0] })
      if (worker < mineWorkerNeedList[0]) {
        log('not enough')
        let res = {
          gold: 0,
          people: [0, ...people]
        }
        // log(res, '\n')
        return res
      } else {
        let res = {
          gold: mineGoldList[0],
          people: [mineWorkerNeedList[0], ...people,]
        }
        // log(res, '\n')
        return res
      }
    } else {
      let restA = findWithDetail(mine - 1, worker, people)
      let planA = {
        gold: restA.gold,
        people: [...restA.people, 0]
      }

      let restB = findWithDetail(mine - 1, worker - mineWorkerNeedList[mine - 1], people)

      // log({
      //   mine,
      //   a: [worker],
      //   b: [worker - mineWorkerNeedList[mine - 1], mineWorkerNeedList[mine - 1]]
      // })

      // log('restB', restB)
      let planB = {
        gold: restB.gold + mineGoldList[mine - 1],
        people: [...restB.people, mineWorkerNeedList[mine - 1]]
      }
      // let planB = find(mine - 1, worker - mineWorkerNeedList[mine - 1], people) + mineGoldList[mine - 1]
      // if (planA.gold > planB.gold) {

      // }
      // log('\n')
      // log(`mine = ${mine}, worker = ${worker}`)
      // log(JSON.stringify({ planA, planB }))
      // log('\n')
      return planA.gold > planB.gold ? planA : planB

      // return Math.max(planA, planB)
    }
  }

  return findWithDetail(mineGoldList.length, workerTotal)
  // return find(mineGoldList.length, workerTotal)
}

function main() {
  const mineList = [
    { gold: 200, needWorker: 3 },
    { gold: 300, needWorker: 4 },
    { gold: 350, needWorker: 3 },
    { gold: 400, needWorker: 5 },
    { gold: 500, needWorker: 5 },
  ]
  let goldList = mineList.map(o => o.gold)
  let workerNeedList = mineList.map(o => o.needWorker)

  let res = findMaxGold(goldList, workerNeedList, 10)
  log(res)
}
main()