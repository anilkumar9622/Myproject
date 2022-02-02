import React from "react";
import './App.css';

export default function ProtectedRoute(props) {

    const page = props.page;
    const token = localStorage.getItem("token");

    return token ? page: <div> Unauthorized </div>;

}