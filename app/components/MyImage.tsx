import React from "react";
import { JSX } from "react";
import Image from "next/image";
import MyImage from "../vansh_passport.jpg";


export default function ProfileImage(): JSX.Element {
    return (
        <div className="border border-white rounded-full shadow mix-blend-darken">
            <Image
                src={MyImage}
                style={{
                    objectFit: "cover",
                    height: "250px",
                    width: "250px"
                }}
                className="rounded-full"
                alt="My Passport Sized Image"
            ></Image>
        </div>
    )
}