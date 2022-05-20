/* eslint-disable */
const { exec } = require('child_process')

let branch_name = ''

const logError = (err) => {
    console.log(`\x1b[31m${err}`)
}

exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
    if (err) {
        logError(err)
    }

    if (typeof stdout === 'string') {
        branch_name = stdout.trim()

        handleProcess()
    }
})

const handleProcess = () => {
    const branch_name_convention = 'translation-'
    const strings_path = 'crowdin/messages.json'

    // Detect Auto Translation Process
    if (branch_name.startsWith(branch_name_convention)) {
        console.log(
            `\x1b[32mInvalid branch name: \x1b[33m${branch_name}\x1b[32m Auto Extract Strings \n `,
        )

        runProcess({
            process: 'extract',
            callback: () => {
                exec(`git add ${strings_path}`)
            },
        })
    }
}

const runProcess = (data) => {
    const { process, callback } = data

    switch (process) {
        case 'extract':
            exec('npm run translate:extract', callback)
            break
        default:
            break
    }
}
