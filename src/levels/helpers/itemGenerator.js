export function* itemGenerator(itemList) {
  const allitems = []
  let sum = 0

  for (const e of itemList.cards) {
    sum += e.freq
    allitems.push({ ...e, freq: sum, type: "card" })
  }
  for (const e of itemList.items) {
    sum += e.freq
    allitems.push({ ...e, freq: sum, type: "item" })
  }

  while (true) {
    const rand = Math.random() * sum + 1
    const item = allitems.find(e => e.freq >= rand)

    yield item
  }
}