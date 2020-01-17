const matchups = require('./g2')
const fs = require('fs')

const newMatchup = {}

for (const matchup of matchups) {
  const { os, ow, type, i } = matchup
  newMatchup[type] = {
    os,
    ow,
    ds: findDs(type),
    dw: findDw(type),
    oi: i || [],
    di: findDi(type)
  }
}

console.log(newMatchup)
fs.writeFileSync('newMatchups.js', JSON.stringify(newMatchup))

function findDs(type) {
  const ds = []
  for (const matchup of matchups) {
    if (matchup.ow.includes(type)) ds.push(matchup.type)
  }
  return ds
}

function findDw(type) {
  const dw = []
  for (const matchup of matchups) {
    if (matchup.os.includes(type)) dw.push(matchup.type)
  }

  return dw || []
}

function findDi(type) {
  const di = []
  for (const matchup of matchups) {
    if (matchup.i) if (matchup.i.includes(type)) di.push(matchup.type)
  }
  return di
}
