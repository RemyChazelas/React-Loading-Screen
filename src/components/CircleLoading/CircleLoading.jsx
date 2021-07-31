import { CircularProgress } from "@material-ui/core";
import React from 'react';

import "./CircleLoading.css.css";

export default function CircleLoading({ type }) {

    const Circle = () => (
        <div className="circle">
            <CircularProgress />
        </div>
    );

    if (type === "circle") return <Circle />;
}