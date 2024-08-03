import React from "react";

function NotFoundPage() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: " 35px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src="/images/notFound.png" alt="notFoundImage" style={{width:"50%"}}/>
      <h1 style={{ fontSize: "1.2rem",fontWeight:"500",color:"#e63946" }}>NOT FOUND PAGE !!🫠</h1>
    </div>
  );
}

export default NotFoundPage;
