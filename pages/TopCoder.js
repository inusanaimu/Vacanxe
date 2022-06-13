const atm = (amount) => {
  const notes = { hunderd: 100, fifty: 50, twenty: 20 }
  let note100 = 0
  let note50 = 0
  let note20 = 0
  let dispenseAmount = [note100, note50, note20]

  if (!(amount < notes.twenty)) {
    note100 = Math.floor(amount / notes.hunderd)
    console.log(note100)
    let remainder100 = amount - notes.hunderd * note100
    console.log(remainder100)
    note50 = Math.floor(remainder100 / notes.fifty)
    console.log(note50)
    let remainder50 = remainder100 - notes.fifty * note50
    console.log(remainder50)
    note20 = Math.floor(remainder50 / notes.twenty)
    console.log(note20)
    let remainder20 = remainder50 - notes.twenty * note20
    console.log(remainder20)

    if (remainder20 === 0) {
      dispenseAmount = [note100, note50, note20]
      return dispenseAmount
    } else {
      if (amount >= notes.fifty) {
        note100 = 0
        note50 = 0
        note20 = 0
        note50 = Math.floor(1)
        console.log(note50)
        let remainder50 = amount - notes.fifty * note50
        console.log(remainder50)
        note20 = Math.floor(remainder50 / notes.twenty)
        console.log(note20)
        let remainder20 = remainder50 - notes.twenty * note20
        console.log(remainder20)
      }
      if (remainder20 === 0) {
        dispenseAmount = [note100, note50, note20]
        return dispenseAmount
      } else {
        note100 = 0
        note50 = 0
        note20 = 0
        note20 = Math.floor(amount / notes.twenty)
        console.log(note20)
        let remainder20 = amount - notes.twenty * note20
        console.log(remainder20)
        if (remainder20 === 0) {
          dispenseAmount = [note100, note50, note20]
          return dispenseAmount
        } else {
          return 'Enter an amount with factor of 100, 50 or 20'
        }
      }
    }
  } else {
    return dispenseAmount
  }
}

atm(130)
