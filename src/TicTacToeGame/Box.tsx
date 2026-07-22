import React from "react";



const Box = (props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; value: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => {
    return (
            
        <div 
        onClick={props.onClick}
        className="box-style">
     <h4>{props.value}</h4>
        </div>
    );
}

export default Box;