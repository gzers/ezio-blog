import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { Command } from 'commander'

const program = new Command()

program
    .arguments('<target> <replacement>')
    .description('Replace target string with replacement string in all markdown (md) files under docs/zh directory and its subdirectories')
    .action(function (target, replacement) {
        const rootDir = path.resolve('docs\\zh')

        const getFileList = (dir, fileList = []) => {
            const files = fs.readdirSync(dir)
            files.forEach((file) => {
                const filePath = path.join(dir, file)
                if (fs.statSync(filePath).isDirectory()) {
                    getFileList(filePath, fileList)
                } else if (path.extname(file) === '.md') {
                    fileList.push(filePath)
                }
            })
            return fileList
        }

        const files = getFileList(rootDir)

        if (files.length === 0) {
            console.log(chalk`{yellow No Markdown files found under ${rootDir} directory}`)
            return
        }

        console.log(chalk`{blue Start to replace ${target} with ${replacement} in ${files.length} files under ${rootDir} directory and its subdirectories.}`)

        files.forEach((file) => {
            const content = fs.readFileSync(file, 'utf-8')
            const replacedContent = content.replace(new RegExp(target, 'g'), replacement)
            fs.writeFileSync(file, replacedContent)
            console.log(chalk`{green File ${file} is updated.}`)
        })

        console.log(chalk`{blue Done.}`)
    })

program.usage('<target> <replacement>').parse(process.argv)