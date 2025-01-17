"use strict";

const BLOG_SITE = "https://blog.ari.lt/";
const COMMENT_SITE = "https://user.ari.lt/";

const FETCH_BLOG_POSTS = () =>
    fetch("https://blog.ari.lt/recents.json").then((r) => r.json());

const FETCH_COMMENTS = () => {
    return fetch("https://server.ari.lt/total")
        .then((r) => r.text())
        .then((t) => {
            let total = parseInt(t);

            let fetch_from = total - 14;
            if (fetch_from < 0) fetch_from = total;

            return fetch(
                `https://server.ari.lt/${fetch_from}/${total}`
            ).then((r) => r.json());
        });
};

const FETCH_PAGES = () => fetch("/api/pages.json").then((r) => r.json());

// let dt = new Date();
// const BIRTHDAY = new Date(dt.getFullYear() - 2, dt.getMonth(), dt.getDate(), 0, 0, 0, 0);
const BIRTHDAY = new Date(2020, 9, 17, 0, 0, 0, 0); // ari-web start : 2020/10/17
const NUMERICS = ["st", "nd", "rd", "th"];
const SITE_NAME = "ari-web";

const EXTRA_PAGES = [
    "/mr",
    "/etc",
    "/page/blog",
    "/data",
    "/gh",
    "/overlay",
    "/dotfiles",
    "/tdotfiles",
    "/git",
    "/user",
    "/btc",
];

const DO_FETCH = true;
