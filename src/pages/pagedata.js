export function Info() {
    const urlParams = new URLSearchParams(window.location.search).get("code");
    window.localStorage.setItem("code", urlParams);
    window.location.href = "/";
}