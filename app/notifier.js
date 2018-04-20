const updateNotifier = require('update-notifier')
const pkg = require('../package.json')

const notify = () => {
  const notifier = updateNotifier({ pkg })

  if (notifier.update) {
    notifier.notify()
  }
}

module.exports = notify
