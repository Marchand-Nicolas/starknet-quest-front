import Menu from "../components/menu";
import menuStyles from "../styles/components/Menu.module.css";
import config from "./config";

export default function fetchApi(url, body, setMenu) {
    const env = process.env.NODE_ENV
    return fetch(env == "development" ? url.split(config.apiUrl).join(config.devApiUrl) : url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
    .then(async response => {
        if (response.status >= 200 && response.status < 300) {
            const datas = await response.json();
            if (datas.hasOwnProperty("error")) error(1, datas);
            return datas;
        }
        error(0, { code: response.status });
        return {};
    })
    .catch(err => {
        error(1, {error : err});
        return {};
    });
    function error(type, datas) {
        console.log(datas);
        switch (type) {
            case 0:
                setMenu(<Menu setMenu={setMenu} closeButtonName="Close" class={menuStyles.error} title='The server responded unusually' child={ 
                    <>
                        <strong>Error code</strong> : {datas.code}
                        <br></br>
                        <br></br>
                        <strong>Please contact us</strong>
                    </>}
                />);
            break;
            default:
                setMenu(<Menu setMenu={setMenu} closeButtonName="Close" class={menuStyles.error} title='Error while processing the request'
                child={<div dangerouslySetInnerHTML={{__html: `${datas.error}`}}/>}
                />);
            break;
        }
    }
}