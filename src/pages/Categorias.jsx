import { useState, useEffect } from "react";
import "../assets/css/blog.css";
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import { useParams } from "react-router-dom";

const Categoria = () => {
    const { id } = useParams();

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet Noticias</h2>
            </div>
            <ListCategories />
            <ListPosts url={`/posts?categoria=${id}`} />
        </>
    );
};

export default Categoria;
