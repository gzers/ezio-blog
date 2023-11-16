/**
 * 获取目录下的所有文件的相对路径
 * 解决路由名称枚举问题
 */
import fs from 'fs'
import {path} from '@vuepress/utils'

interface GetDocPathParamsType {
    title: string|null
    collapsable: boolean|null
    relativePath: string
}

export function getDocPath(getDocPathParams: GetDocPathParamsType) {
    const { title, collapsable, relativePath} = getDocPathParams
    const absolutePath = path.join(__dirname, '../..' + relativePath)
    const files = fs.readdirSync(absolutePath)
    console.log(files)
    const components = []
    // 排除检查的文件
    const excludes = ['.DS_Store']
    let arr = files.sort(function(a, b) {
        const aList = a.split('.') as unknown as number
        const bList = b.split('.') as unknown as number
        if (aList && bList) {
            return aList[0] - bList[0]
        }
        return 0
    });
    arr.forEach(function (item) {
        if (excludes.indexOf(item) < 0) {
            let stat = fs.lstatSync(absolutePath + '/' + item)
            if (item == 'README.md') {
                components.unshift(relativePath)
            } else if (!stat.isDirectory()) {
                let res = item.replace('.md', '')
                if (res.indexOf('（未完）') === -1) {
                    components.push(relativePath + res)
                }
            } else {
                let res = item.replace('.md', '')
                getDocPath({
                    title: null,
                    collapsable: false,
                    relativePath: relativePath + res
                })
            }
        }
    })
    return {
        title: title || null,
        sidebarDepth: 2,
        collapsable: collapsable,
        children: components
    }
}