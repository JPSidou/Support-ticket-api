export function parseRoutePath(path){
    console.log(path)
    const paramRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(paramRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

    return pathRegex
}