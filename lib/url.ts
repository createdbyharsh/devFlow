import qs from "query-string";

type UrlQueryParamsProps = {
    params: string,
    key: string,
    value: string
}

type RemoveUrlQueryParamsProps = {
    params: string,
    keysToRemove: string[];
}

export const formUrlQuery = ({params, key, value}: UrlQueryParamsProps)=>{
    const queryString = qs.parse(params);

    queryString[key] = value;

    return qs.stringifyUrl({
        url: window.location.pathname,
        query:queryString,
    })

}

export const removeKeysFromUrlQuery = ({params, keysToRemove}: RemoveUrlQueryParamsProps)=>{
    const queryString = qs.parse(params);

    keysToRemove.forEach((key)=>{
        delete queryString[key]
    })
    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString,
    }, {skipNull: true})
}