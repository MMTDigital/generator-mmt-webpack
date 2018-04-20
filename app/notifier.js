const notify = () => {
  const notifier = updateNotifier({ pkg })
  console.log(notifier.update)
  // if (notifier.update) {
    console.log(`
      You're on an oudated version. Please update before using: ${notifier.update.latest}
    `)
  // }
}

module.exports = notify
