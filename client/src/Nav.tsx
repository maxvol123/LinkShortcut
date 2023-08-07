import icon from "./img/icon.png"
export function Nav() {
    return(
        <>
            <div className="py-5 px-10 bg-blue-400 w-full flex center text-white justify-between">
                <div className="flex">
                <div className="text-white mt-2 mr-3">Link ShortCut</div>
                <img src={icon} className="h-10 align-middle" alt="" />
                </div>
                <a className="align-middle font-semibold mt-2" href="/">Auth</a>
            </div>
        </>
    )
}