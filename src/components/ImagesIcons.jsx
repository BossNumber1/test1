import React from "react";
import icon_facebook from "../imgs/icon/icons8-facebook.svg";
import icon_google from "../imgs/icon/icons8-google.svg";
import icon_instagram from "../imgs/icon/icons8-instagram.svg";

function ImagesIcons() {
    let listIcons = [
        { id: 1, src: icon_facebook },
        { id: 2, src: icon_google },
        { id: 3, src: icon_instagram },
    ];

    let allIcons = listIcons.map((el) => (
        <span className="btn mx-2" key={el.id}>
            <img src={el.src} alt="icon" />
        </span>
    ));

    return <div className="d-flex justify-content-center mb-4">{allIcons}</div>;
}

export default ImagesIcons;
