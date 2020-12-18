import { Schema } from "amis/lib/types";
import React from "react";
import AMisRenderer from "../components/AMisRenderer";

export default function(schema:Schema) {
    return (props:any) => {
        return (
            <AMisRenderer schema={schema} {...props} />
        )
    }
}